import config from "../../config/"
import DerivedUnit from '../../derived-unit/derived-unit'
import DerivedUnitTerm from '../../derived-unit-term/derived-unit-term'
import Kilogram from "../../si/kilogram"
import Meter from "../../si/meter"
import Second from "../../si/second"
import Quantity from "../quantity"
import RoundingPolicy from "../../rounding-policy/rounding-policy"
import roundingStrategy from '../../rounding-policy/rounding-strategy/rounding-strategy'

describe("@archetypes/quantity/Quantity", () => {
  const {
    ROUND,
    ROUND_DOWN,
    ROUND_DOWN_BY_STEP,
    ROUND_TOWARDS_NEGATIVE,
    ROUND_TOWARDS_POSITIVE,
    ROUND_UP,
    ROUND_UP_BY_STEP
  } = roundingStrategy

  console.log(ROUND)

  const decimalSystem = config.get("quantity.decimalSystem")
  let metric = null
  let roundingPolicy = null
  let quantity = null

  const realNumbers = Object.freeze(
    Object.assign(
      {
        NEGATIVE_TWO: -2,
        NEGATIVE_ONE: -1
      },
      { ...decimalSystem }
    )
  )

  beforeEach(() => {
    metric = new Second()
    quantity = new Quantity(realNumbers.ZERO, metric)
    roundingPolicy = new RoundingPolicy(ROUND)
  })

  afterEach(() => {
    roundingPolicy = null
    quantity = null
  })

  it("represents an amount measured in some Metric", () => {
    expect(quantity).toBeDefined()
    expect(quantity.metric).toBeDefined()
    expect(Object.isFrozen(quantity.metric)).toBe(true)
  })

  it("provides a numeric amount", () => {
    expect(quantity.amount).toBe(realNumbers.ZERO)
  })

  describe("has arithmetic operations", () => {

    describe('add', () => {
      it("adds another quantity with the same Metric", () => {
        const addend = new Quantity(realNumbers.ZERO, metric)
        let sum = quantity.add(addend)
        expect(sum.amount).toBe(realNumbers.ZERO)

        quantity.amount = realNumbers.FIVE
        addend.amount = realNumbers.NINE
        sum = quantity.add(addend)
        const FOURTEEN = 14
        expect(sum.amount).toBe(FOURTEEN)
      })

      describe("when the augend's metric and addend's metric are different", () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const addend = new Quantity(realNumbers.ZERO, new Kilogram())
            quantity.add(addend)
          }).toThrow()
        })
      })
    })

    describe('subtract', () => {
      it("subtracts another Quantity.prototype with the same metric", () => {
        const { ONE, ZERO } = realNumbers
        const subtrahend = new Quantity(ONE, metric)
        let difference = quantity.subtract(subtrahend)
        expect(difference.amount).toBeLessThan(ZERO)

        quantity.amount = ONE
        difference = quantity.subtract(subtrahend)
        expect(difference.amount).toBe(ZERO)
      })
      describe("when the minuend's metric and subtrahend's metric are different", () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const subtrahend = new Quantity(realNumbers.ZERO, new Kilogram())
            quantity.subtract(subtrahend)
          }).toThrow()
        })
      })
    })

    describe("multiplies", () => {
      let factor = null
      let product = null

      afterEach(() => {
        factor = null
        product = null
      })

      test("another Quantity.prototype", () => {
        factor = new Quantity(realNumbers.TWO, metric)
        product = quantity.multiply(factor)
        expect(product.amount).toBe(realNumbers.ZERO)
      })

      test("a Number.prototype", () => {
        quantity.amount = realNumbers.THREE
        factor = realNumbers.TWO
        product = quantity.multiply(factor)
        expect(product.amount).toBe(realNumbers.SIX)
      })
    })

    describe("divides", () => {
      let divisor = null
      let quotient = null

      afterEach(() => {
        divisor = null
        quotient = null
      })

      test("another Quantity.prototype", () => {
        const { TWO } = realNumbers
        quantity.amount = TWO
        divisor = new Quantity(TWO, metric)
        quotient = quantity.divide(divisor)
        expect(quotient.amount).toBe(realNumbers.ONE)
      })

      describe('the Metric returned by the the new Quantity quotient', () => {
        it('is a DerivedUnit that following the formula TP⁻¹', () => {
          const { ZERO, ONE, TWO } = realNumbers
          const { getInstance } = Second
          quantity.amount = TWO
          quantity.metric = new Meter()
          divisor = new Quantity(ONE, getInstance())
          quotient = quantity.divide(divisor)
          expect(quotient.metric.name).toBe('meters per second')
          expect(quotient.metric).toBeInstanceOf(DerivedUnit)
          expect(quotient.metric.terms).toBeDefined()
          expect(quotient.metric.terms[ZERO]).toBeInstanceOf(DerivedUnitTerm)
          expect(quotient.metric.terms[ZERO].unit).toBeInstanceOf(Meter)
          expect(quotient.metric.terms[ONE]).toBeInstanceOf(DerivedUnitTerm)
          expect(quotient.metric.terms[ONE].unit).toBeInstanceOf(Second)
        })
      })

      test("a Number.prototype", () => {
        const { THREE, TWO } = realNumbers
        quantity.amount = THREE
        divisor = TWO
        quotient = quantity.divide(divisor)
        const actualAmount = THREE / TWO
        expect(quotient.amount).toBe(actualAmount)
      })
    })
  })

  describe("has comparison operations", () => {
    let comparate = null

    afterEach(() => {
      comparate = null
    })

    describe("equalTo", () => {
      it("determines whether the amounts of two Quantity objects are the same", () => {
        comparate = new Quantity(realNumbers.ZERO, metric)
        expect(quantity.equalTo(comparate)).toBe(true)

        comparate.amount = realNumbers.EIGHT
        expect(quantity.equalTo(comparate)).toBe(false)
      })
    })

    describe("greaterThan", () => {
      it("determines whether an amount is larger than another Quantity", () => {
        comparate = new Quantity(realNumbers.ZERO, metric)
        expect(quantity.greaterThan(comparate)).toBe(false)

        quantity.amount = realNumbers.EIGHT
        expect(quantity.greaterThan(comparate)).toBe(true)
      })
    })

    describe("lessThan", () => {
      it("determines whether an amount is smaller than another Quantity", () => {
        comparate = new Quantity(realNumbers.ZERO, metric)
        expect(quantity.lessThan(comparate)).toBe(false)

        comparate.amount = realNumbers.EIGHT
        expect(quantity.lessThan(comparate)).toBe(true)
      })
    })
  })

  describe("roundingPolicy determines how Quantities are rounded with", () => {
    let result = null

    beforeEach(() => {
      roundingPolicy = new RoundingPolicy(ROUND, {
        numberOfDigits: realNumbers.TWO
      })
      quantity.amount = 142.312
    })

    afterEach(() => {
      result = null
      roundingPolicy = null
    })

    describe("roundingPolicy.roundingStrategy.ROUND", () => {
      it("`numberOfDigits` determines the number of digits before or after the decimal place", () => {
        roundingPolicy.numberOfDigits = realNumbers.TWO
        roundingPolicy.roundingStrategy = ROUND

        result = 142.31

        expect(quantity.round(roundingPolicy).amount).toBe(result)

        roundingPolicy.numberOfDigits = Number.MAX_VALUE
        result = 142.312
        expect(quantity.round(roundingPolicy).amount).toBe(result)

        roundingPolicy.numberOfDigits = Number.MIN_VALUE
        result = 142
        expect(quantity.round(roundingPolicy).amount).toBe(result)

        roundingPolicy.numberOfDigits = realNumbers.ONE
        result = 142.3
        expect(quantity.round(roundingPolicy).amount).toBe(result)

        roundingPolicy.numberOfDigits = realNumbers.ZERO
        result = 142
        expect(quantity.round(roundingPolicy).amount).toBe(result)

        roundingPolicy.numberOfDigits = realNumbers.NEGATIVE_ONE
        result = 140
        expect(quantity.round(roundingPolicy).amount).toBe(result)

        roundingPolicy.numberOfDigits = realNumbers.NEGATIVE_TWO
        result = 100
        expect(quantity.round(roundingPolicy).amount).toBe(result)
      })

      it("`roundingDigit` determines whether to perform rounding", () => {
        roundingPolicy.numberOfDigits = 1
        roundingPolicy.roundingDigit = 4
        quantity.amount = 4.45

        expect(quantity.round(roundingPolicy).amount).toBe(4.5)

        quantity.amount = -4.45
        expect(quantity.round(roundingPolicy).amount).toBe(-4.5)

        roundingPolicy.roundingDigit = 6
        quantity.amount = 4.45

        expect(quantity.round(roundingPolicy).amount).toBe(4.4)

        quantity.amount = -4.45

        expect(quantity.round(roundingPolicy).amount).toBe(-4.4)
      })
    })

    describe("roundingPolicy.roundingStrategy.ROUND_DOWN", () => {
      it("rounds an amount to the specified numberOfDigits toward zero", () => {
        roundingPolicy = new RoundingPolicy(ROUND_DOWN, {
          numberOfDigits: realNumbers.ONE
        })

        quantity.amount = 4.45
        expect(quantity.round(roundingPolicy).amount).toBe(4.4)

        quantity.amount = -4.45
        expect(quantity.round(roundingPolicy).amount).toBe(-4.4)
      })
    })

    describe("roundingPolicy.roundingStrategy.ROUND_DOWN_BY_STEP", () => {
      it("rounds an amount down to the nearest multiple of the specified roundingStep", () => {
        quantity.amount = 4.45
        roundingPolicy.roundingStep = 0.25
        roundingPolicy.roundingStrategy = ROUND_DOWN_BY_STEP
        expect(quantity.round(roundingPolicy).amount).toBe(4.25)

        quantity.amount = -4.45
        expect(quantity.round(roundingPolicy).amount).toBe(-4.25)
      })
    })

    describe("roundingPolicy.roundingStrategy.ROUND_TOWARDS_NEGATIVE", () => {
      beforeEach(() => {
        roundingPolicy.numberOfDigits = realNumbers.ONE
        roundingPolicy.roundingStrategy =
          ROUND_TOWARDS_NEGATIVE
      })

      it("makes positive numbers become less positive", () => {
        quantity.amount = 4.45
        expect(quantity.round(roundingPolicy).amount).toBe(4.4)
      })
      it("makes negative numbers become more negative", () => {
        quantity.amount = -4.45
        expect(quantity.round(roundingPolicy).amount).toBe(-4.5)
      })
    })

    describe("roundingPolicy.roundingStrategy.ROUND_TOWARDS_POSITIVE", () => {
      beforeEach(() => {
        roundingPolicy.numberOfDigits = realNumbers.ONE
        roundingPolicy.roundingStrategy =
          ROUND_TOWARDS_POSITIVE
      })

      it("makes positive numbers become more positive", () => {
        quantity.amount = 4.45
        expect(quantity.round(roundingPolicy).amount).toBe(4.5)
      })

      it("makes negative numbers become less negative", () => {
        quantity.amount = -4.45
        expect(quantity.round(roundingPolicy).amount).toBe(-4.4)
      })
    })

    describe("roundingPolicy.roundingStrategy.ROUND_UP", () => {
      it("rounds an amount to the specified numberOfDigits away from zero (0)", () => {
        roundingPolicy = new RoundingPolicy(ROUND_UP, {
          numberOfDigits: realNumbers.ONE
        })

        quantity.amount = 4.45
        expect(quantity.round(roundingPolicy).amount).toBe(4.5)

        quantity.amount = -4.45
        expect(quantity.round(roundingPolicy).amount).toBe(-4.5)
      })
    })

    describe("roundingPolicy.roundingStrategy.ROUND_UP_BY_STEP", () => {
      it("rounds an amount down to the nearest multiple of the specified roundingStep", () => {
        roundingPolicy.roundingStep = 0.25
        roundingPolicy.roundingStrategy = ROUND_UP_BY_STEP
        quantity.amount = 4.45

        expect(quantity.round(roundingPolicy).amount).toBe(4.5)

        quantity.amount = 4.25

        expect(quantity.round(roundingPolicy).amount).toBe(4.25)

        quantity.amount = -4.45

        expect(quantity.round(roundingPolicy).amount).toBe(-4.5)

        quantity.amount = -4.25

        expect(quantity.round(roundingPolicy).amount).toBe(-4.25)
      })
    })
  })

})
