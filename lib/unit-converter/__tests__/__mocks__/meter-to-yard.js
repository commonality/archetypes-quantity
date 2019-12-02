import StandardConversion from '../../../standard-conversion/standard-conversion'
import Yard from './yard'
import si from '../../../si/si'

const CONVERSION_FACTOR = 0.9144

class MeterToYard extends StandardConversion {
  constructor() {
    super({
      conversionFactor: CONVERSION_FACTOR,
      sourceUnit: si.Meter,
      targetUnit: Yard
    })
  }
}

export default MeterToYard
