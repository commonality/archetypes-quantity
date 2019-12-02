import signOf from './sign-of'

const parseSign = (power) => signInterpreter.get(signOf(power))

const signInterpreter = new Map([
  [
    '+', ''
  ],
  [
    '-', 'per'
  ],
  [
    'minus-sign',
    'per'
  ],
  [
    'negative',
    'per'
  ],
  [
    'plus-sign',
    ''
  ],
  [
    'positive',
    ''
  ]
])

signInterpreter.transcribe = ({ power }) => parseSign(power).trim()

export default signInterpreter
