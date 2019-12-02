import DerivedUnit from '../../../derived-unit'
import derivedUnitNameInterpreter from '..'

describe('@archetypes/quantity/derived-unit/helpers/DerivedUnitNameInterpreter', () => {

  describe('transcribe', () => {
    const { transcribe } = derivedUnitNameInterpreter
    it('parses DerivedUnitTerms into humanized text', () => {
      const derivedUnit = new DerivedUnit({
        definition: 'area',
        name: 'square meter',
        symbol: 'm²',
        systemOfUnits: {
          "nameOfStandardizationBody": "BIPM",
          "nameOfSystem": "SI"
        },
        terms: [
          {
            "power": -2,
            "unit": {
              "definition": "Length of a path travelled by light in a vacuum during a time interval of 1/299792459 of a second",
              "name": "meter",
              "symbol": "m",
              "systemOfUnits": {
                "nameOfStandardizationBody": "BIPM",
                "nameOfSystem": "SI"
              }
            }
          }
        ]
      })
      const phrase = transcribe(derivedUnit)
      expect(phrase).toBeDefined()
      expect(phrase).toContain('per square meter')
    })
    test('meters per second', () => {
      const speedOfSound = new DerivedUnit({
        definition: 'speed of sound',
        name: 'speed of sound',
        symbol: 'm·s⁻¹',
        systemOfUnits: {
          "nameOfStandardizationBody": "BIPM",
          "nameOfSystem": "SI"
        },
        terms: [
          {
            "power": 1,
            "unit": {
              "definition": "Length of a path travelled by light in a vacuum during a time interval of 1/299792459 of a second",
              "name": "meter",
              "symbol": "m",
              "systemOfUnits": {
                "nameOfStandardizationBody": "BIPM",
                "nameOfSystem": "SI"
              }
            }
          },
          {
            "power": -1,
            "unit": {
              definition: 'The duration of 9,192,631,770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom',
              name: 'second',
              symbol: 's',
              systemOfUnits: {
                nameOfStandardizationBody: 'BIPM',
                nameOfSystem: 'SI'
              }
            }
          }
        ]
      })
      const phrase = transcribe(speedOfSound)
      expect(phrase).toEqual(['meter', 'per second'])
    })
  })

})
