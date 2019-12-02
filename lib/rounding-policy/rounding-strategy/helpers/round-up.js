import round from 'lodash.round'

const roundUp = (number, roundingPolicy) => {
  const { numberOfDigits } = roundingPolicy
  return round(Math.abs(number), numberOfDigits) * Math.sign(number)
}

export default roundUp
