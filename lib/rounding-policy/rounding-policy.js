import config from '../config'
import get from 'lodash.get'
import roundingStrategy from './rounding-strategy/rounding-strategy'

const opts = {
  roundingPolicy: config.get('quantity.roundingPolicy')
}

const defaultRoundingStrategyFn = get(
  roundingStrategy,
  opts.roundingPolicy.roundingStrategy
)

/**
 * @name RoundingPolicy
 *
 * @classdesc
 * Determines the mathematical semantics of the {Quantity}'s round()
 * operation
 *
 * @date 2019-11-01
 * @property {number} [numberOfDigits=config.get('quantity.roundingPolicy.numberOfDigits')]
 * @property {number} [roundingDigit=config.get('quantity.roundingPolicy.roundingDigit')]
 * @property {number} [roundingStep=config.get('quantity.roundingPolicy.roundingStep')]
 * @property {function} [roundingStrategy=roundingStrategy.ROUND]
 */

class RoundingPolicy {
  constructor (
    strategy = defaultRoundingStrategyFn,
    policyOptions = opts.roundingPolicy
  ) {
    const { numberOfDigits, roundingDigit, roundingStep } = {
      ...opts.roundingPolicy,
      policyOptions
    }
    this.numberOfDigits = numberOfDigits
    this.roundingDigit = roundingDigit
    this.roundingStep = roundingStep
    this.roundingStrategy = strategy
  }
}

export default RoundingPolicy
