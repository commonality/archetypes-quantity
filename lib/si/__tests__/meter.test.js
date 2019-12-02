import SiSystemOfUnits from '../si-system-of-units'
import Meter from '../meter'

describe('@archetypes/quantity/si/Meter', () => {
  let meter = null

  beforeAll(() => {
    meter = new Meter()
  })

  afterAll(() => {
    meter = null
  })

  it('represents the SI unit for length', () => {
    expect(meter).toBeDefined()
    expect(meter.name).toBe('meter')
    expect(meter.symbol).toBe('m')
    expect(meter.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
  })

  it('is immutable (frozen)', () => {
    expect(Object.isFrozen(meter)).toBe(true)
  })
})
