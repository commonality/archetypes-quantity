import DerivedUnit from '../../derived-unit/derived-unit'
import si from '../si'

describe('si', () => {

  describe('module represents the International System of Units', () => {
    describe('baseUnits', () => {
      it('is a convenient Map for getting SI base units by name', () => {
        expect(si.baseUnits.get('meter')).toBeInstanceOf(si.SiBaseUnit)
      })
    })

    describe('derivedUnits', () => {
      it('is a convenient Map for getting special, named SI derived units', () => {
        expect(si.derivedUnits.get('radian')).toBeInstanceOf(DerivedUnit)
      })
    })

  })

})
