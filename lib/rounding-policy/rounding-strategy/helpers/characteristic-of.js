/**
 * @name characteristicOf
 * @description
 * Get the numbers to the left of a decimal (floating) point.
 *
 * @params {Number} number - A Number instance or primative.
 * @returns {Number} All numbers to the left of the decimal point of a number, or zero (0).
 */

const characteristicOf = (number) => Math.trunc(number)

export default characteristicOf
