import SiSystemOfUnits from '../si-system-of-units';

describe('@archetypes/quantity/si/SiSystemOfUnits', () => {
  describe('is the modern form of the metric system and is the most widely used system of measurement.', () => {
    const si = new SiSystemOfUnits()

    describe('nameOfSystem', () => {
      it('is the name of the System', () => {
        expect(si.nameOfSystem).toBe('SI')
      })
    })
    describe('nameOfStandardizationBody', () => {
      it('is the governing body of measures', () => {
        expect(si.nameOfStandardizationBody).toBe('BIPM')
      })
    })
  })
})
