import Meter from '../../si/meter'
import StandardConversion from '../standard-conversion'

describe('@archetypes/quantity/StandardConversion', () => {
  describe('is used to convert one Unit into another with', () => {
    const standardConversion = new StandardConversion({
      conversionFactor: 1,
      sourceUnit: new Meter(),
      targetUnit: new Meter()
    })
    describe('conversionFactor', () => {
      it('is a number used to convert', () => {
        expect(standardConversion.conversionFactor).toBeDefined()
      })
    })

    describe('sourceUnit', () => {
      it('is the original Quantity', () => {
        expect(standardConversion.sourceUnit).toBeDefined()
      })
    })

    describe('targetUnit', () => {
      it('is the type of Unit that a Quantity attempts to convert to.', () => {
        expect(standardConversion.targetUnit).toBeDefined()
      })
    })
  })
})
