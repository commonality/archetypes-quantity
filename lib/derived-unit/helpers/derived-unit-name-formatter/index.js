import derivedUnitNameInterpreter from '../derived-unit-name-interpreter'
import { array, isValid } from 'ow'
import pluralize from 'pluralize'

const isWritable = (derivedUnit, prop) => {
  const { configurable, writable } =
    Object.getOwnPropertyDescriptor(derivedUnit, prop)
  return configurable && writable
}

const hasTerms = ({ terms }) => isValid(terms, array.nonEmpty)

const format = (derivedUnit, interpreter = derivedUnitNameInterpreter) => {
  let { name } = derivedUnit
  if (hasTerms(derivedUnit) && isWritable(derivedUnit, 'name')) {
    const phrase = interpreter.transcribe(derivedUnit)
    const firstTermName = pluralize(phrase.shift(), derivedUnit.amount)
    phrase.unshift(firstTermName)
    name = phrase.join(' ').replace(/\s+/gmu, ' ').trim()
  }
  return name
}

const derivedUnitNameFormatter = {
  format
}

export default derivedUnitNameFormatter
