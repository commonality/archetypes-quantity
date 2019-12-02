import SiSystemOfUnits from '../si-system-of-units'
import Second from '../second'

describe('@archetypes/quantity/si/Second', () => {
  let second = null

  beforeAll(() => {
    second = new Second()
  })

  afterAll(() => {
    second = null
  })

  it('represents the SI unit for time', () => {
    expect(second).toBeDefined()
    expect(second.name).toBe('second')
    expect(second.symbol).toBe('s')
    expect(second.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
  })

  it('is immutable (frozen)', () => {
    expect(Object.isFrozen(second)).toBe(true)
  })
})
