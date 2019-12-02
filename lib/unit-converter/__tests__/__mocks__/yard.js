import SystemOfUnits from '../../../system-of-units/system-of-units'
import Unit from '../../../unit/unit'

class Yard extends Unit {
  constructor() {
    super({
      definition: 'mock-unit',
      name: 'yard',
      symbol: 'yd',
      systemOfUnits: new SystemOfUnits(
        'United States customary units',
        'N/A'
      )})
  }
}

const instance = new Yard()
Yard.getInstance = () => instance

export default Yard
