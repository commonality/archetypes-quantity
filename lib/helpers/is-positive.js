import { number as _number, isValid } from 'ow'

const isPositive = (number) => isValid(number, _number.positive)

export default isPositive
