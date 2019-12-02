import Ampere from './ampere'
import Candela from './candela'
import Kelvin from './kelvin'
import Kilogram from './kilogram'
import Meter from './meter'
import Mole from './mole'
import Second from './second'
import SiBaseUnit from './si-base-unit'
import SiSystemOfUnits from './si-system-of-units'
import siBaseUnitInstanceMap from './si-base-unit-instance-map'
import siDerivedUnits from './si-derived-units'

const siDerivedUnitMap = new Map(Object.entries(siDerivedUnits))

const si = {
  Ampere,
  Candela,
  Kelvin,
  Kilogram,
  Meter,
  Mole,
  Second,
  SiBaseUnit,
  SiSystemOfUnits,
  'baseUnits': {
    ...Object.fromEntries(siBaseUnitInstanceMap),
    get (metricName) {
      return siBaseUnitInstanceMap.get(metricName)
    }
  },
  'derivedUnits': {
    ...siDerivedUnits,
    get (derivedUnitName) {
      return siDerivedUnitMap.get(derivedUnitName)
    }
  }
}

export default si
