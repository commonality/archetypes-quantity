import SiBaseUnit from './si-base-unit'
import config from '../config'

class Second extends SiBaseUnit {
  constructor () {
    super(config.get('cache.si.metric.second'))
  }
}

const instance = new Second()
Second.getInstance = () => instance

export default Second
