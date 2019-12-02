import powerInterpreter from '../index'

describe('@archetypes/quantity/derived-unit/helpers/powerInterpreter', () => {
  const { transcribe } = powerInterpreter
  const EMPTY = ''

  describe('when given a derivedUnitTerm', () => {
    it('transcribes the power to humanized terms', () => {
      expect(transcribe({
        power: 1
      })).toBe(EMPTY)

      expect(transcribe({
        power: -1
      })).toBe(EMPTY)

      expect(transcribe({
        power: 2
      })).toBe('square')

      expect(transcribe({
        power: -2
      })).toBe('square')

      expect(transcribe({
        power: 3
      })).toBe('cubic')

      expect(transcribe({
        power: -3
      })).toBe('cubic')

    })
  })
})
