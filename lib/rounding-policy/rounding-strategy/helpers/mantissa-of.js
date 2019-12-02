import config from '../../../config'

const { ONE } = config.get('quantity.decimalSystem')

/**
 * @name mantissaOf
 * @description
 * Get the numbers to the right of a decimal (floating) point.
 *
 * @params {Number} number - A Number instance or primitive.
 * @returns {Number} All numbers to the right of the decimal point of a number, or zero (0)
 * if `number` is an integer.
 */

const mantissaOf = (number) => number % ONE

export default mantissaOf
