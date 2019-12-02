import defineFrozenProperty from '../helpers/define-frozen-property'
import validateHasProperties from '../helpers/validate-has-properties'
import validateNonEmptyString from '../helpers/validate-non-empty-string'

/**
 * @class Metric
 *
 * @classdesc
 * A standard of measurement.
 *
 * @property {string} definition - The definition.
 * @property {string} name - The canonical name.
 * @property {string} symbol - The canonical symbol/abbreviation.
 *
 * @date 2019-11-01
 * @version 1.0.0
 */

class Metric {
  constructor (params) {
    validateHasProperties(params, ['name', 'symbol'])
    const { name, symbol, definition } = params
    validateNonEmptyString(name, 'params.name')
    validateNonEmptyString(symbol, 'params.symbol')

    defineFrozenProperty(this, 'definition', definition)
    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: true,
      value: name,
      writable: true
    })
    defineFrozenProperty(this, 'symbol', symbol)
  }
}

export default Metric
