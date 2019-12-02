import Quantity from '../quantity/quantity'
import createTargetUnit from './helpers/create-target-unit'
import findStandardConversion from './helpers/find-standard-conversion'
import pluralize from 'pluralize'
import validateConstructorParam from './helpers/validate-constructor-param'
import validateConvertParams from './helpers/validate-convert-params'

/**
 * @class UnitConverter
 * @classdesc
 * Converts a Quantity in a source Unit to a Quantity in a target Unit.
 *
 * @property {Array<StandardConversion>} [standardConversions=[]] - An
 * array of zero or more StandardConversion instances.
 *
 * @date 2019-11-02
 * @version 1.0.0
 */

class UnitConverter {
  constructor (standardConversions = []) {
    validateConstructorParam(standardConversions)
    this.standardConversions = [...standardConversions]
  }

  /**
   * Find a StandardConversion that references the correct Units for the
   * given quantity and targetUnit parameters.
   *
   * @param {Quantity} quantity - The Quantity to be converted.
   * @param {Unit} targetUnit - The Unit to which the quantity should be
   * converted.
   * @returns {Quantity} - A new Quantity converted to the targetUnit.
   * @memberof UnitConverter
   * @date 2019-11-02
   */

  convert (quantity, targetUnit) {
    validateConvertParams(quantity, targetUnit)
    const standard = findStandardConversion(this, quantity, targetUnit)
    if (standard) {
      const amount = quantity.amount * standard.conversionFactor
      const metric = createTargetUnit(targetUnit)
      return new Quantity(amount, metric)
    }
    const sourceName = pluralize(quantity.metric.name, Number.MAX_SAFE_INTEGER)
    const targetName = pluralize(targetUnit.name, Number.MAX_SAFE_INTEGER)
    throw new TypeError(`No standards conversions available to convert ${sourceName} into ${targetName}`)
  }
}

export default UnitConverter
