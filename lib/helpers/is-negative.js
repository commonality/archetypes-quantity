import { number as _number, isValid } from 'ow'

const isNegative = (number) => isValid(number, _number.negative)

export default isNegative
