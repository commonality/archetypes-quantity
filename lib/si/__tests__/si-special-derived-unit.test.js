import SiSpecialDerivedUnit from '../si-special-derived-unit'

describe('SiSpecialDerivedUnit', () => {

  describe('creates immutable objects', () => {
    test('to ensure they cannot be renamed', () => {
      const unit = new SiSpecialDerivedUnit({
        definition: 'mock-definition',
        name: 'mock-si-special-derived-unit',
        symbol: 'mockery',
        terms: []
      })
      expect(unit.name).toBe('mock-si-special-derived-unit')

      expect(() => {
        unit.name = 'tryna-change-it'
      }).toThrow(TypeError)
    })
  })

})
