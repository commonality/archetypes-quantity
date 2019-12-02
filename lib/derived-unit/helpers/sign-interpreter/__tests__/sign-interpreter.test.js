import signInterpreter from '../index';

describe('@archetypes/quantity/derived-unit/helpers/signInterpreter', () => {

  const EMPTY = ''
  const PER = 'per'

  describe('parse', () => {
    const { transcribe } = signInterpreter
    it('transcribes exponent values to humanized terms', () => {
      expect(transcribe({
        power: 1
      })).toBe(EMPTY)

      expect(transcribe({
        power: -1
      })).toBe(PER)

      expect(transcribe({
        power: 2
      })).toBe(EMPTY)

      expect(transcribe({
        power: -2
      })).toBe(PER)

      expect(transcribe({
        power: 3
      })).toBe(EMPTY)

      expect(transcribe({
        power: -3
      })).toBe(PER)
    })
  })

})
