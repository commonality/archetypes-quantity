import SiBaseUnit from './si-base-unit'
import config from '../config'

class Meter extends SiBaseUnit {
  constructor () {
    super(config.get('cache.si.metric.meter'))
  }
}

const instance = new Meter()

Meter.getInstance = () => instance

export default Meter
