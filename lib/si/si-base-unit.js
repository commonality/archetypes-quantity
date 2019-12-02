import SiSystemOfUnits from './si-system-of-units'
import Unit from '../unit/unit'

/**
 * @class SiBaseUnit
 *
 * @classdesc
 * Represents one of the base-units defined in the International
 * System of Units (SI).
 *
 * @extends {Unit}
 *
 * @property {string} definition - The formal definition of the
 * Metric.
 * @property {string} name - The canonical name of the Metric.
 * @property {string} symbol - The canonical symbol/abbreviation of
 * the Metric.
 * @property {SystemOfUnits} systemOfUnits - The standard that
 *  establishes a set of related Units.
 *
 * @date 2019-11-02
 */

class SiBaseUnit extends Unit {
  /**
   * Creates an instance of Unit.
   *
   * @param {object} params - object literal parameters.
   * @param {string} params.definition - The definition.
   * @param {string} params.name - The canonical name.
   * @param {string} params.symbol - The canonical symbol/abbreviation.
   *
   * @memberof {SiBaseUnit}
   *
   * @date 2019-11-02
   */

  constructor (params) {
    super({
      definition: params.definition,
      name: params.name,
      symbol: params.symbol,
      systemOfUnits: SiSystemOfUnits.getInstance()
    })
    Object.freeze(this)
  }
}

export default SiBaseUnit
