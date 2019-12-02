import si from '../../si/si'
import Metric from '../../metric/metric'
import Quantity from '../../quantity/quantity'
import Unit from '../../unit/unit'
import validatePrototypeOf from '../validate-prototype-of'

describe('@archetypes/quantity~validatePrototypeOf', () => {
  const ONE = 1

  const { baseUnits, SiBaseUnit } = si
  let quantity = null
  let meter = null
  const { isPrototypeOf } = validatePrototypeOf

  describe('when given the argument', () => {
    beforeEach(() => {
      meter = baseUnits.get('meter')
      quantity = new Quantity(ONE, meter)
    })

    afterEach(() => {
      meter = null
      quantity = null
    })

    describe('instance', () => {
      test('SiBaseUnit instances have Unit as their prototypes', () => {
        expect(
          isPrototypeOf(
            Unit,
            new SiBaseUnit({
              name: 'name',
              symbol: 'symbol'
            })
          )
        ).toBe(true)
      })

      test('Meter instances (Meter < SiBaseUnit < Unit) have Unit in their prototype chain', () => {
        expect(isPrototypeOf(Unit, meter)).toBe(true)
      })

      test('Meter constructors (Meter < SiBaseUnit < Unit) have Unit in their prototype chain', () => {
        const { Meter } = si
        expect(isPrototypeOf(Unit, Meter)).toBe(true)
      })

      describe('(which is the object to be inspected)', () => {
        it('must have a prototype', () => {
          const { metric } = quantity

          expect(metric).toBeInstanceOf(Metric)
          expect(isPrototypeOf(Unit, metric)).toBe(true)

          expect(() => {
            validatePrototypeOf(metric, SiBaseUnit, 'quantity.metric')
          }).not.toThrow()

          expect(() => {
            validatePrototypeOf(metric, Unit, 'quantity.metric')
          }).not.toThrow()
        })
      })
    })

    describe('constructor', () => {
      it(`checks whether or not the constructor's prototype in the the instance's prototype chain`, () => {
        expect(constructor.prototype).toBeDefined()
      })
    })

    describe('label', () => {
      it('is used for customized ArgumentError messages', () => {
        const label = 'si-base-unit'
        try {
          validatePrototypeOf({}, SiBaseUnit, label)
        } catch (err) {
          expect(err.message).toContain(label)
        }
      })
    })
  })
})
