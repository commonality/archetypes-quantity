import isNumber from './is-number'
import validateCommonSystemOfUnits from '../metric/helpers/validate-common-system-of-units'

const validateNumberOrCommonMetric = (quantity, value) => {
  if (!isNumber(value)) {
    validateCommonSystemOfUnits(quantity, value)
  }
}

export default validateNumberOrCommonMetric
