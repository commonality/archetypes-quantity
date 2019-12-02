import Metric from '../metric/metric'
import SystemOfUnits from '../system-of-units/system-of-units'
import defineFrozenProperty from '../helpers/define-frozen-property'
import validateInstanceOf from '../helpers/validate-instance-of'

/**
 * @class Unit
 *
 * @classdesc
 * Represents a type of Metric that is part of a SystemOfUnits.
 *
 * @property {string} definition - The formal definition of the
 * Metric.
 * @property {string} name - The canonical name of the Metric.
 * @property {string} symbol - The canonical symbol/abbreviation of
 * the Metric.
 * @property {SystemOfUnits} systemOfUnits - The standard that
 *  establishes a set of related Units.
 *
 * @extends {Metric}
 *
 * @date 2019-11-01
 */

class Unit extends Metric {
  /**
   * Creates an instance of Unit.
   *
   * @param {object} params - object literal parameters.
   * @param {string} params.definition - The formal definition of the
   * Metric.
   * @param {string} params.name - The canonical name of the Metric.
   * @param {string} params.symbol - The canonical symbol/abbreviation of
   * the Metric.
   * @param {SystemOfUnits} params.systemOfUnits - The standard that
   *  establishes a set of related Units.
   *
   * @memberof Unit
   *
   * @date 2019-11-02
   */

  constructor (params) {
    super(params)
    const { systemOfUnits } = params
    validateInstanceOf(systemOfUnits, SystemOfUnits)
    defineFrozenProperty(this, 'systemOfUnits', systemOfUnits)
  }
}

export default Unit
