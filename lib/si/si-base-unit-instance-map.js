import Ampere from './ampere'
import Candela from './candela'
import Kelvin from './kelvin'
import Kilogram from './kilogram'
import Meter from './meter'
import Mole from './mole'
import Second from './second'

const siBaseUnitInstanceMap = new Map([
  ['ampere', Ampere.getInstance()],
  ['candela', Candela.getInstance()],
  ['kelvin', Kelvin.getInstance()],
  ['kilogram', Kilogram.getInstance()],
  ['meter', Meter.getInstance()],
  ['mole', Mole.getInstance()],
  ['second', Second.getInstance()]
])

export default siBaseUnitInstanceMap
