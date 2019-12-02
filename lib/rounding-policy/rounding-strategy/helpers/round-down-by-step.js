import characteristicOf from './characteristic-of'
import mantissaOf from './mantissa-of'

const roundDownByStep = (number, roundingPolicy) => {
  const { roundingStep } = roundingPolicy
  const characteristic = Math.abs(characteristicOf(number))
  const mantissa = Math.abs(mantissaOf(number))
  const modulus = mantissa % roundingStep

  return (characteristic + (mantissa - modulus)) * Math.sign(number)
}

export default roundDownByStep
