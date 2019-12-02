import SiBaseUnit from './si-base-unit'
import config from '../config'

class Kelvin extends SiBaseUnit {
  constructor () {
    super(config.get('cache.si.metric.kelvin'))
  }
}

const instance = new Kelvin()

Kelvin.getInstance = () => instance

export default Kelvin
