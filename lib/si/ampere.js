import SiBaseUnit from './si-base-unit'
import config from '../config'

class Ampere extends SiBaseUnit {
  constructor () {
    super(config.get('cache.si.metric.ampere'))
  }
}

const instance = new Ampere()

Ampere.getInstance = () => instance

export default Ampere
