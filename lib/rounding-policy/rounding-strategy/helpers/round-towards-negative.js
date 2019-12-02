import isPositive from '../../../helpers/is-positive'
import roundDown from './round-down'
import roundUp from './round-up'

const roundTowardsNegative = (number, roundingPolicy) => {
  if (isPositive(number)) {
    return roundDown(number, roundingPolicy)
  }
  return roundUp(number, roundingPolicy)
}

export default roundTowardsNegative
