import DerivedUnitTerm from '../derived-unit-term'

describe('DerivedUnitTerm', () => {
  let term = null

  beforeEach(() => {
    term = new DerivedUnitTerm({
      "power": 2,
      "unit": {
        "definition": "Length of a path travelled by light in a vacuum during a time interval of 1/299792459 of a second",
        "name": "meter",
        "symbol": "m",
        "systemOfUnits": {
          "nameOfStandardizationBody": "BIPM",
          "nameOfSystem": "SI"
        }
      }
    })
  })

  afterEach(() => {
    term = null
  })

  describe('represents part of a DerivedUnit comprising a', () => {

    test('power', () => {
      const POWER = 2
      expect(term.power).toBe(POWER)
    })

    describe('when the `power` parameter is omitted', () => {
      it('defaults to one (1)', () => {
        term = new DerivedUnitTerm()
        const POWER = 1
        expect(term.power).toBe(POWER)
      })
    })

    test('and its unit', () => {
      expect(term.name).toBe('meter')
    })

    describe('although the unit property', () => {
      it('is optional', () => {
        term = new DerivedUnitTerm({
          "power": 2
        })
        expect(term.unit).toBeUndefined()
      })
    })
  })

})
