import SiBaseUnit from '../si-base-unit'
import SiSystemOfUnits from '../si-system-of-units'

describe('@archetypes/quantity/si/SiBaseUnit', () => {
  describe('represents one of the base units defined in the International System of Units (SI)', () => {
    describe('systemOfUnits', () => {
      it('is set to SI', () => {
        const baseUnit = new SiBaseUnit({
          name: 'si-base-unit',
          definition: null,
          symbol: '🔬🔬🔬'
        })
        expect(baseUnit.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
      })
    })
  })
})
