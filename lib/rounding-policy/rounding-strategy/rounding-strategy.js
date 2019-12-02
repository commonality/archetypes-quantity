import roundBy from './helpers/round-by'
import roundDown from './helpers/round-down'
import roundDownByStep from './helpers/round-down-by-step'
import roundTowardsNegative from './helpers/round-towards-negative'
import roundTowardsPositive from './helpers/round-towards-positive'
import roundUp from './helpers/round-up'
import roundUpByStep from './helpers/round-up-by-step'

const roundingStrategy = {
  ROUND: roundBy,
  ROUND_DOWN: roundDown,
  ROUND_DOWN_BY_STEP: roundDownByStep,
  ROUND_TOWARDS_NEGATIVE: roundTowardsNegative,
  ROUND_TOWARDS_POSITIVE: roundTowardsPositive,
  ROUND_UP: roundUp,
  ROUND_UP_BY_STEP: roundUpByStep
}

export default roundingStrategy
