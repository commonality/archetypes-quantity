import validateConstructorParams from './helpers/validate-constructor-params'

/**
 * @class StandardConversion
 * @classdesc
 * Defines a conversionFactor that can be used to convert a Quantity in a
 * source Unit to a Quantity in a target Unit.
 *
 *
 * @property {number} conversionFactor - A number used to convert.
 * @property {Unit} sourceUnit - The original Quantity.
 * @property {Unit} targetUnit - The type of Unit that a Quantity attempts
 *  to convert to.
 *
 * @date 2019-11-02
 */

class StandardConversion {
  /**
   * Creates an instance of StandardConversion.
   * @param {object} params - A parameterized Object Literal.
   * @param {number} params.conversionFactor - A number used to convert.
   * @param {Unit} params.sourceUnit - The original Quantity.
   * @param {Unit} params.targetUnit - The type of Unit that a Quantity attempts
   *  to convert to.
   * @memberof StandardConversion
   * @date 2019-11-02
   */

  constructor (params) {
    validateConstructorParams(params)
    const { conversionFactor, sourceUnit, targetUnit } = params
    this.conversionFactor = conversionFactor
    this.sourceUnit = sourceUnit
    this.targetUnit = targetUnit
  }
}

export default StandardConversion
