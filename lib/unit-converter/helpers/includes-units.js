import { isValid, object } from 'ow'

const includesUnits = (standardConversion, sourceUnit, targetUnit) =>
  isValid(sourceUnit, object.deepEqual(standardConversion.sourceUnit)) &&
  isValid(targetUnit, object.deepEqual(standardConversion.targetUnit))

export default includesUnits
