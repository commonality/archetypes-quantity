import SiSystemOfUnits from '../si-system-of-units'
import Mole from '../mole'

describe('@archetypes/quantity/si/Mole', () => {
  let mole = null

  beforeAll(() => {
    mole = new Mole()
  })

  afterAll(() => {
    mole = null
  })

  it('represents the SI unit for substance', () => {
    expect(mole).toBeDefined()
    expect(mole.name).toBe('mole')
    expect(mole.symbol).toBe('mol')
    expect(mole.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
  })

  it('is immutable (frozen)', () => {
    expect(Object.isFrozen(mole)).toBe(true)
  })
})
