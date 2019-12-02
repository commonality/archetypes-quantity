import RoundingPolicy from '../rounding-policy'

describe('@archetypes/quantity/RoundingPolicy', () => {
  describe(`Determines the mathematical semantics of the {Quantity}'s round(...)
 operation`, () => {
    let roundingPolicy = null

    beforeEach(() => {
      roundingPolicy = new RoundingPolicy()
    })

    afterEach(() => {
      roundingPolicy = null
    })

    describe('numberOfDigits', () => {
      it('declares the no. of digits before or after the decimal place', () => {
        expect(roundingPolicy.numberOfDigits).toBeDefined()
      })
    })

    describe('roundingDigit', () => {
      it('is the test digit with which a digit with the number is compared', () => {
        expect(roundingPolicy.roundingDigit).toBeDefined()
      })
    })

    describe('roundingStep', () => {
      it('is the multiple to which a new Quantity should be rounded', () => {
        expect(roundingPolicy.roundingStep).toBeDefined()
      })
    })

    describe('roundingStrategy', () => {
      it('determines the type of rounding to be applied', () => {
        expect(roundingPolicy.roundingStrategy).toBeDefined()
      })
    })
  })
})
