import config from '../../../config'

const {
  TWO,
  THREE
} = config.get('quantity.decimalSystem')

const powerInterpreter = new Map([
  [
    TWO,
    'square'
  ],
  [
    THREE,
    'cubic'
  ]
])

powerInterpreter.transcribe = ({ power }) =>
  powerInterpreter.get(Math.abs(power)) || ''

export default powerInterpreter
