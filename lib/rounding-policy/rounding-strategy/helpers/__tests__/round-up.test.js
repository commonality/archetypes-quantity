import roundUp from '../round-up'
import RoundingPolicy from '../../../rounding-policy'
import { ROUND_UP } from '../../../rounding-strategy/rounding-strategy'

describe('@archetypes/quantity/roundingStrategy.ROUND_UP', () => {
  let number = null
  let result = null
  let roundingPolicy = null

  beforeEach(() => {
    number = 4.45
    roundingPolicy = new RoundingPolicy(ROUND_UP, {
      numberOfDigits: 1
    })
  })

  afterEach(() => {
    number = null
    roundingPolicy = null
    result = null
  })

  it('rounds a number to a specified numberOfDigits (away from zero)', () => {
    result = 4.5
    expect(roundUp(number, roundingPolicy)).toBe(result)

    number = -4.45
    result = -4.5
    expect(roundUp(number, roundingPolicy)).toBe(result)
  })
})
