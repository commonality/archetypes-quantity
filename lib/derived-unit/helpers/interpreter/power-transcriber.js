import config from '../../../config'

const {
  TWO,
  THREE
} = config.get('quantity.decimalSystem')

const powerTranscriber = new Map([
  [
    TWO,
    'square'
  ],
  [
    THREE,
    'cubic'
  ]
])

powerTranscriber.parse = ({ power }) =>
  powerTranscriber.get(Math.abs(power)) || ''

export default powerTranscriber
