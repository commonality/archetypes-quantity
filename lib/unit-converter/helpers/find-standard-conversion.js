import includesUnits from './includes-units'

const findStandardConversion = (converter, quantity, targetUnit) => {
  const { standardConversions } = converter
  const sourceUnit = Object
    .getPrototypeOf(quantity.metric)
    .constructor
  return standardConversions.find((standardConversion) =>
    includesUnits(standardConversion, sourceUnit, targetUnit)
  )
}

export default findStandardConversion
