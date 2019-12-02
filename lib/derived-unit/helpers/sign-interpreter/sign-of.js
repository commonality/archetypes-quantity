import config from '../../../config'
import { number as _number, isValid } from 'ow'

const { RADIX } = config.get('quantity.decimalSystem')

const signOf = (value) => {
  const number = Number.parseInt(value, RADIX)
  let sign = ''
  if (isValid(number, _number)) {
    if (isValid(number, _number.positive)) {
      sign = '+'
    } else {
      sign = '-'
    }
  }
  return sign
}

export default signOf
