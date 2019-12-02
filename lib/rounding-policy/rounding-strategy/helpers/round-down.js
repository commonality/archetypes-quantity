import config from '../../../config'

const { ZERO, ONE } = config.get('quantity.decimalSystem')

const roundDown = (number, roundingPolicy) => {
  const { numberOfDigits } = roundingPolicy
  const decimalIndex = number.toString().indexOf('.')
  const result = number
    .toString()
    .substring(ZERO, decimalIndex + numberOfDigits + ONE)
  return Number.parseFloat(result)
}

export default roundDown
