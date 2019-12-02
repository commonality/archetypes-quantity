import DerivedUnitTerm from '../derived-unit-term/derived-unit-term'
import SystemOfUnits from '../system-of-units/system-of-units'
import Unit from '../unit/unit'
import derivedUnitNameFormatter from './helpers/derived-unit-name-formatter'
import get from 'lodash.get'

/**
 * @class DerivedUnit
 * @extends {Unit}
 *
 * @classdesc
 * Represents a combination of one or more base {Units} according to a
 * specific equation.
 *
 * @property {Array.<DerivedUnitTerm>} [params.derivedUnitTerms=[]] -
 * An array of zero (0) or more DerivedUnitTerm instances that,
 * when joined in sequence, provide the name of the DerivedUnit.
 *
 * @date 2019-11-04
 */

class DerivedUnit extends Unit {
  /**
   * Creates an instance of DerivedUnit.
   *
   * @param {object} params - An object literal of inputs.
   * @param {string} params.definition - The formal definition of the
   *  Metric.
   * @param {string} params.name - The canonical name of the Metric.
   * @param {string} params.symbol - The canonical symbol/abbreviation of
   *  the Metric.
   * @param {SystemOfUnits} params.systemOfUnits - The standard that
   *  establishes a set of related Units.
   * @param {Array.<DerivedUnitTerm>} [params.terms=[]] -
   *  An ordered list of zero (0) or more DerivedUnitTerm instances that,
   *  when joined in sequence, provide the name of the DerivedUnit.
   *
   * @throws {ArgumentError} - Whenever `params.derivedUnitTerms` has
   * a member that does not have {Unit} in its prototype chain.
   *
   * @memberof DerivedUnit
   *
   * @date 2019-11-05
   */

  constructor (params) {
    super({
      'definition': params.definition,
      'name': derivedUnitNameFormatter.format(params),
      'symbol': params.symbol,
      'systemOfUnits': new SystemOfUnits(
        params.systemOfUnits.nameOfSystem,
        params.systemOfUnits.nameOfStandardizationBody
      )
    })
    this.terms = get(params, 'terms', []).map(
      (term) =>
        new DerivedUnitTerm({
          ...term
        })
    )
  }
}

export default DerivedUnit
