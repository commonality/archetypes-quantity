import isNegative from '../../../helpers/is-negative'
import round from 'lodash.round'
import roundDown from './round-down'
import roundingComparatorFrom from './rounding-comparator-from'
import roundUp from './round-up'

/**
 * Round a number up or down according to
 * @param {number} amount - A measure of something as a Real Number.
 * @param {enum} [policy] - The mathematical semantics governing how rounding
 *  operations should be performed.
 * @param {number} [policy.numberOfDigits=Number.MAX_VALUE] - The number of
 *  digits before or after the decimal place (i.e., the precision required).
 * @param {number} [policy.roundingDigit=5] - A test digit with which a digit
 *  within the number being rounded is compared.
 * @param {number} [policy.roundingStep=1] - The multiple to which you want to
 * round.
 * @returns {number} - A rounded number.
 */

const roundBy = (number, roundingPolicy) => {
  const comparator = roundingComparatorFrom(number, roundingPolicy)
  const { numberOfDigits, roundingDigit } = roundingPolicy
  if (isNegative(numberOfDigits)) {
    return round(number, numberOfDigits)
  }
  if (comparator >= roundingDigit) {
    return roundUp(number, roundingPolicy)
  }
  return roundDown(number, roundingPolicy)
}

export default roundBy
