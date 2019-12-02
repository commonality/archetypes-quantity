import signOf from '../sign-of'

describe('signOf', () => {

  describe('when given a number', () => {
    it('returns the mathematical sign', () => {
      expect(signOf(3)).toBe('+')
      expect(signOf(+3)).toBe('+')
      expect(signOf(-1)).toBe('-')
    })
  })

  describe('when given a string numeral', () => {
    it('returns the mathematical sign', () => {
      expect(signOf('3')).toBe('+')
      expect(signOf('+3')).toBe('+')
      expect(signOf('-1')).toBe('-')
    })
  })

  describe('when given a value that cannot be parsed as a Number', () => {
    it('returns an empty string', () => {
      expect(signOf('(')).toBe('')
    })
  })

})
