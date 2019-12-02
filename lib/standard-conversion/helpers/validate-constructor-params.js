import Unit from '../../unit/unit'
import validatePrototypeOf from '../../helpers/validate-prototype-of'
import validateType from '../../helpers/validate-type'

const validateConstructorParams = (params) => {
  const { conversionFactor, sourceUnit, targetUnit } = params
  validateType(conversionFactor, 'Number')
  validatePrototypeOf(sourceUnit, Unit, 'sourceUnit')
  validatePrototypeOf(targetUnit, Unit, 'targetUnit')
}

export default validateConstructorParams
