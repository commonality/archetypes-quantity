import SystemOfUnits from '../system-of-units/system-of-units'
import config from '../config'

const {
  nameOfSystem,
  nameOfStandardizationBody
} = config.get('cache.si.systemOfUnits')

class SiSystemOfUnits extends SystemOfUnits {
  constructor () {
    super(nameOfSystem, nameOfStandardizationBody)
    Object.freeze(this)
  }
}

const instance = new SiSystemOfUnits()

SiSystemOfUnits.getInstance = () => instance

export default SiSystemOfUnits
