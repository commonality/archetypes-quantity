import DerivedUnit from '../../../derived-unit'
import powerTranscriber from '../power-transcriber'

describe('powerTranscriber', () => {

  describe('parse', () => {
    it('converts DerivedUnitTerms into humanized text', () => {
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
      const METER = 0
      const exponent = powerTranscriber.parse(derivedUnit.terms[METER])
      expect(exponent).toBeDefined()
      expect(exponent).toBe('square')
    })

    describe('whenever there are no terms', () => {
      it('returns an empty string', () => {
        const pow = powerTranscriber.parse({
          terms: []
        })
        expect(pow).toBe('')
      })
    })

  })

})
