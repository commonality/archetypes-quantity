import get from 'lodash.get'
import { isValid, string } from 'ow'
import powerInterpreter from '../power-interpreter'
import signInterpreter from '../sign-interpreter'
import unitNameInterpreter from '../unit-name-interpreter'

const isNotEmpty = (value) => isValid(value, string.nonEmpty)

const interpretationSequence = [
  signInterpreter,
  powerInterpreter,
  unitNameInterpreter
]

const derivedUnitNameInterpreter = {

  interpreters: interpretationSequence,

  transcribe (params) {
    const terms = get(params, 'terms', [])
    return terms.map((term) => derivedUnitNameInterpreter
      .interpreters
      .map(({ transcribe }) => transcribe(term)
        .replace(/\s{2,}/gmu, '').trim()
      )
      .filter((phrase) => isNotEmpty(phrase))
      .join(' ').trim()
    )
  }
}

export default derivedUnitNameInterpreter
