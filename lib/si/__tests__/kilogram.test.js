import SiSystemOfUnits from '../si-system-of-units'
import Kilogram from '../kilogram'

describe('@archetypes/quantity/si/Kilogram', () => {
  let kilogram = null

  beforeAll(() => {
    kilogram = new Kilogram()
  })

  afterAll(() => {
    kilogram = null
  })

  it('represents the SI unit of mass', () => {
    expect(kilogram).toBeDefined()
    expect(kilogram.name).toBe('kilogram')
    expect(kilogram.symbol).toBe('kg')
    expect(kilogram.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
  })

  it('is immutable (frozen)', () => {
    expect(Object.isFrozen(kilogram)).toBe(true)
  })
})
