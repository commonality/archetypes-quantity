import SiBaseUnit from './si-base-unit'
import config from '../config'

class Kilogram extends SiBaseUnit {
  constructor () {
    super(config.get('cache.si.metric.kilogram'))
  }
}

const instance = new Kilogram()

Kilogram.getInstance = () => instance

export default Kilogram
