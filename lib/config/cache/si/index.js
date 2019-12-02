import siBaseUnitCollection from './si-base-unit-collection.json'
import siSystemOfUnits from './si-system-of-units.json'

const si = {
  metric: {
    ...siBaseUnitCollection
  },
  systemOfUnits: {
    ...siSystemOfUnits
  }
}

export default si
