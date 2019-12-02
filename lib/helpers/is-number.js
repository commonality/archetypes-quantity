import { isValid, number } from 'ow'

const isNumber = (value) => isValid(value, number)

export default isNumber
