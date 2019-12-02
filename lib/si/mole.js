import SiBaseUnit from './si-base-unit'
import config from '../config'

class Mole extends SiBaseUnit {
  constructor () {
    super(config.get('cache.si.metric.mole'))
  }
}

const instance = new Mole()

Mole.getInstance = () => instance

export default Mole
