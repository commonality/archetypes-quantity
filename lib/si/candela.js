import SiBaseUnit from './si-base-unit'
import config from '../config'

class Candela extends SiBaseUnit {
  constructor () {
    super(config.get('cache.si.metric.candela'))
  }
}

const instance = new Candela()

Candela.getInstance = () => instance

export default Candela
