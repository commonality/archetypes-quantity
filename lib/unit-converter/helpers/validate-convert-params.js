import Quantity from '../../quantity/quantity'
import Unit from '../../unit/unit'
import validateInstanceOf from '../../helpers/validate-instance-of'
import validatePrototypeOf from '../../helpers/validate-prototype-of'

const validateConvertParams = (quantity, targetUnit) => {
  validateInstanceOf(quantity, Quantity)
  validatePrototypeOf(quantity.metric, Unit, 'quantity.metric')
  validatePrototypeOf(targetUnit, Unit, 'targetUnit')
}

export default validateConvertParams
