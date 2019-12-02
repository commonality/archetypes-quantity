import SiSystemOfUnits from '../si-system-of-units'
import Candela from '../candela'

describe('@archetypes/quantity/si/Candela', () => {
  let candela = null

  beforeAll(() => {
    candela = new Candela()
  })

  afterAll(() => {
    candela = null
  })

  it('represents the SI unit of luminous intensity', () => {
    expect(candela).toBeDefined()
    expect(candela.name).toBe('candela')
    expect(candela.symbol).toBe('cd')
    expect(candela.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
  })

  it('is immutable (frozen)', () => {
    expect(Object.isFrozen(candela)).toBe(true)
  })
})
