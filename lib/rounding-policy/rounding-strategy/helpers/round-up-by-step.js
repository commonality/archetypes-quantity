import characteristicOf from './characteristic-of'
import config from '../../../config'
import mantissaOf from './mantissa-of'

const { RADIX } = config.get('quantity')
const { ONE } = config.get('quantity.decimalSystem')

const roundUpByStep = (number, roundingPolicy) => {
  const { roundingStep } = roundingPolicy
  const factor =
    Math.abs(Math.trunc((mantissaOf(number) % roundingStep) * RADIX)) || ONE
  const characteristic = Math.abs(characteristicOf(number))
  return (characteristic + roundingStep * factor) * Math.sign(number)
}

export default roundUpByStep
