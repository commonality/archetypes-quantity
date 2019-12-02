import SiSystemOfUnits from '../si-system-of-units'
import Ampere from '../ampere'

describe('@archetypes/quantity/si/Ampere', () => {
  let ampere = null

  beforeAll(() => {
    ampere = new Ampere()
  })

  afterAll(() => {
    ampere = null
  })

  it('represents the SI unit of electric current', () => {
    expect(ampere).toBeDefined()
    expect(ampere.name).toBe('ampere')
    expect(ampere.symbol).toBe('A')
    expect(ampere.systemOfUnits).toBeInstanceOf(SiSystemOfUnits)
  })

  it('is immutable (frozen)', () => {
    expect(Object.isFrozen(ampere)).toBe(true)
  })
})
