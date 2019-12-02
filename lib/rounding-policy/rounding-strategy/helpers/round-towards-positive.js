import isPositive from '../../../helpers/is-positive'
import roundDown from './round-down'
import roundUp from './round-up'

const roundTowardsPositive = (number, roundingPolicy) => {
  if (isPositive(number)) {
    return roundUp(number, roundingPolicy)
  }
  return roundDown(number, roundingPolicy)
}

export default roundTowardsPositive
