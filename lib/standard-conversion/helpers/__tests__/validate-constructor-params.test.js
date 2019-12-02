import validateConstructorParams from '../validate-constructor-params'
import Meter from '../../../si/meter'

/* eslint-disable max-len */

describe('@archetypes/quantity/StandardConversion~validateConstructorParams', () => {
  const meter = new Meter()

  describe('inspects the SystemOfUnits constructor params to ensure', () => {
    let params = {
      conversionFactor: null,
      sourceUnit: null,
      targetUnit: null
    }

    beforeEach(() => {
      params = {
        conversionFactor: 2,
        sourceUnit: meter,
        targetUnit: meter
      }
    })

    afterEach(() => {
      params = {
        conversionFactor: null,
        sourceUnit: null,
        targetUnit: null
      }
    })

    describe('conversionFactor', () => {
      it('is a Number', () => {
        expect(() => {
          validateConstructorParams(params)
        }).not.toThrow()

        params.conversionFactor = null

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()

        params.conversionFactor = '1.2'

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()

        params.conversionFactor = {}

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()
      })
    })

    describe('sourceUnit', () => {
      it('is an instance of Unit', () => {
        expect(() => {
          validateConstructorParams(params)
        }).not.toThrow()

        params.sourceUnit = null

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()

        params.sourceUnit = 'sourceUnit'

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()

        params.sourceUnit = {}

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()
      })
    })
    describe('targetUnit', () => {
      it('is an instance of Unit', () => {
        expect(() => {
          validateConstructorParams(params)
        }).not.toThrow()

        params.targetUnit = null

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()

        params.targetUnit = 'targetUnit'

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()

        params.targetUnit = {}

        expect(() => {
          validateConstructorParams(params)
        }).toThrow()
      })
    })
  })
})

/* eslint-enable max-len */
