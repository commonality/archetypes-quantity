import MeterToYard from './__mocks__/meter-to-yard'
import Quantity from '../../quantity/quantity'
import UnitConverter from '../unit-converter'
import Yard from './__mocks__/yard'
import si from '../../si/si'

describe('@archetypes/quantity/unit/UnitConverter', () => {

  describe('uses StandardConversions to', () => {

    it('determine whether a quantity can be converted', () => {
      const NINE = 9
      const quantity = new Quantity(NINE, si.baseUnits.get('meter'))
      const unitConverter = new UnitConverter()
      expect(unitConverter.standardConversions).toBeDefined()
      const EMPTY = 0
      expect(unitConverter.standardConversions.length).toBe(EMPTY)

      expect(() => {
        unitConverter.convert(quantity, Yard)
      }).toThrow(TypeError)
    })
  })

  describe('convert', () => {
    it('creates a new Quantity in a target Unit', () => {
      const NINE = 9
      const quantity = new Quantity(NINE, si.baseUnits.get('meter'))
      const unitConverter = new UnitConverter()
      unitConverter.standardConversions.push(new MeterToYard())
      const EXPECTED = 8.2296
      expect(unitConverter.convert(quantity, Yard).amount).toBe(EXPECTED)
    })
  })

})
