import config from '../../../config'
import nth from 'lodash.nth'
import toSafeInteger from 'lodash.tosafeinteger'

const { RADIX } = config.get('quantity')
const { ZERO, ONE } = config.get('quantity.decimalSystem')

const toInteger = (value) => {
  return toSafeInteger(Number.parseInt(value, RADIX)) || value
}

const roundingComparatorFrom = (number, roundingPolicy) => {
  const { numberOfDigits } = roundingPolicy
  const decimalIndex = number.toString().indexOf('.')
  const digits = Array.from(number.toString()).map((num) => toInteger(num))
  return nth(digits, numberOfDigits + decimalIndex + ONE) || ZERO
}

export default roundingComparatorFrom
