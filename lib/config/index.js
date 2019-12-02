import Conf from 'conf'
import cache from './cache'
import decimalSystem from './decimal-system.json'
import exponent from './exponent-collection.json'
import moduleDefaults from './module-defaults.json'
import pkg from '../../package.json'
import quantityDefaults from './quantity-defaults.json'

/**
 * @name config
 *
 * @description
 * > Store default settings for @archetypes/quantity resources.
 *
 * ### Usage
 *
 * 1. `get` values within the {config} object:
 *
 *    ```js
 *    const { Quantity, config } = require('@archetypes/quantity')
 *    const { Meter } = require('@archetypes/quantity/si')
 *
 *    const {
 *      TWO,
 *      RADIX
 *    } = config.get('quantity.decimalSystem')
 *
 *    const amount = Number.parseInt('9', RADIX)
 *    const metric = new Meter()
 *
 *    const quantity = new Quantity(amount, metric)
 *    const quotient = quantity.divide(TWO)
 *    ```
 *
 * 1. `set` configuration values for your app.
 *
 *    ```js
 *    const { config } = require('@archetypes/quantity')
 *
 *    const { TWO } = config.get('quantity.decimalSystem')
 *
 *    // Change your settings to base-2 (binary):
 *    config.set(
 *      'quantity.RADIX',
 *      TWO
 *    )
 *
 *    const { RADIX } = config.get('quantity')
 *    const amount = 101
 *    Number.parseInt(amount, RADIX)
 *    // => 5
 *    ```
 *
 * > ⚠️ **NOTE**: The {config} object should only store information.
 * >
 * > Do not decorate {config} with functions.
 *
 * ### API
 *
 * @property {object} json - Default values for JSON serialization.
 *
 * @property {function} [json.replacer=null] - A function that alters
 *  the behavior of the stringification process, or an array of String and
 *  Number objects that serve as a whitelist for selecting/filtering the
 *  properties of the value object to be included in the JSON string. If this
 *  value is null or not provided, all properties of the object are included in
 *  the resulting JSON string.
 *
 * @property {string|number} [json.spaces="  "] - A String or Number object
 *  that's used to insert white space into the output JSON string for
 *  readability purposes.
 *
 *  If this is a Number, it indicates the number of space characters to use as
 *  white space; this number is capped at 10 (if it is greater, the value is
 *  just 10). Values less than 1 indicate that no space should be used.
 *
 *  If this is a String, the string (or the first 10 characters of the string,
 *  if it's longer than that) is used as white space. If this parameter is not
 *  provided (or is null), no white space is used.
 *
 * @property {object} quantity - Default settings for values specific
 * to the quantity module.
 *
 * @property {object} quantity.decimalSystem - An enumeration of base-ten
 *  numerals.
 * @property {object} quantity.roundingPolicy - Provides the default values for
 *  rounding semantics.
 * @property {number} [quantity.roundingPolicy.numberOfDigits=1] - The number of
 *  digits before or after the decimal place (i.e., the precision required).
 * @property {number} [quantity.roundingPolicy.roundingDigit=5] - A test digit
 *  with which a digit within the number being rounded is compared.
 * @param {number} [quantity.roundingPolicy.roundingStep=1] - The multiple to
 *  which you want to round.
 * @param {string} [quantity.roundingPolicy.roundingStrategy="ROUND"] - The
 *  enumeration signifying the kind of rounding to applied. Valid
 *  values are
 *
 * - 'ROUND'
 * - 'ROUND_DOWN'
 * - 'ROUND_DOWN_BY_STEP'
 * - 'ROUND_TOWARDS_NEGATIVE'
 * - 'ROUND_TOWARDS_POSITIVE'
 * - 'ROUND_UP'
 * - 'ROUND_UP_BY_STEP'
 *
 * @see https://github.com/sindresorhus/conf#readme
 */

const config = new Conf({
  configName: `archetypes-quantity-config-v${pkg.version}`,
  defaults: {
    ...moduleDefaults,
    cache,
    quantity: {
      decimalSystem,
      ...quantityDefaults,
      exponent
    }
  }
})

export default config
