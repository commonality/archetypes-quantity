import config from '../config'
import defineGetterProperty from './helpers/define-getter-property'

const { ONE } = config.get('quantity.decimalSystem')

/**
 * @class DerivedUnitTerm
 *
 * @classdesc
 * Represents part of a DerivedUnit comprising a single Unit and its power.
 *
 * @property {string} definition - The `unit`'s `definition`.
 * @property {string} name - The `unit`'s `name`.
 * @property {string} symbol - The `unit`'s `symbol`.
 * @property {SystemOfUnits} unit - The`SystemOfUnits` to which the `unit`
 * belongs.
 *
 * @date 2019-11-02
 * @version 1.0.0
 */

class DerivedUnitTerm {
  /**
   * Creates an instance of DerivedUnitTerm.
   *
   * @param {object} [params={ power: ONE, unit: null }] - Default
   * constructor parameters.
   * @param {integer} [params.power=1] - The factor by which as `unit` is
   *  multiplied.
   * @param {Unit} [params.unit=null] - The type of Metric.
   *
   * @memberof DerivedUnitTerm
   *
   *  @date 2019-11-05
   */

  constructor (
    params = {
      power: ONE,
      unit: null
    }
  ) {
    const { power, unit } = params

    this.power = power
    this.unit = unit

    if (this.unit) {
      const { definition, name, symbol, systemOfUnits } = unit
      defineGetterProperty(this, 'definition', definition)
      defineGetterProperty(this, 'name', name)
      defineGetterProperty(this, 'symbol', symbol)
      defineGetterProperty(this, 'systemOfUnits', systemOfUnits)
    }
  }
}

export default DerivedUnitTerm
