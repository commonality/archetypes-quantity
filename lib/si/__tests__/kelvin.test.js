import SiSystemOfUnits from '../si-system-of-units'
import Kelvin from '../kelvin'

describe('@archetypes/quantity/si/Kelvin', () => {
  let kelvin = null

  beforeAll(() => {
    kelvin = new Kelvin()
  })

  afterAll(() => {
    kelvin = null
  })

  it('represents the SI unit of temperature', () => {
    expect(kelvin).toBeDefined()
    expect(kelvin.name).toBe('kelvin')
    expect(kelvin.symbol).toBe('K')
    expect(kelvin.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
  })

  it('is immutable (frozen)', () => {
    expect(Object.isFrozen(kelvin)).toBe(true)
  })
})
