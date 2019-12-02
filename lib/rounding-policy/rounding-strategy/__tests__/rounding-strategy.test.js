import roundingStrategy from '../rounding-strategy.js'

describe('@archetypes/quantity/roundingStrategy', () => {
  it('is an enum with keys that reference rounding functions', () => {
    const properties = [
      'ROUND',
      'ROUND_DOWN',
      'ROUND_DOWN_BY_STEP',
      'ROUND_TOWARDS_NEGATIVE',
      'ROUND_TOWARDS_POSITIVE',
      'ROUND_UP',
      'ROUND_UP_BY_STEP'
    ]
    Object.keys(roundingStrategy).forEach(key => {
      expect(properties.includes(key)).toBe(true)
    })
  })
})
