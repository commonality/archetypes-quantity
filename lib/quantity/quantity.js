import DerivedUnit from '../derived-unit/derived-unit'
import get from 'lodash.get'
import isNumber from '../helpers/is-number'
import ow from 'ow'
import validateCommonMetric from '../metric/helpers/validate-common-metric'
import validateCommonSystemOfUnits from '../metric/helpers/validate-common-system-of-units'
import validateNumberOrCommonMetric from '../helpers/validate-number-or-common-metric'

/**
 * @classdesc
 * Represents an amount measured in some {Metric}.
 *
 * @date 2019-10-27
 * @class Quantity
 * @property {Number} amount - A numeric value.
 * @property {Metric} metric - A defined standard of measurement.
 */

class Quantity {
  /**
   * @param {Number} amount - A numeric value.
   * @param {Metric} metric - A defined standard of measurement.
   */

  constructor (amount, metric) {
    ow(amount, ow.number)
    this.amount = amount
    this.metric = metric
  }

  /**
   * Calculate the sum of two Quantity objects.
   *
   * @date 2019-10-27
   * @param {Quantity} quantity - The addend Quantity.
   * @returns {Quantity} - A new Quantity with an amount equal to the sum of two other Quantity objects.
   * @memberof Quantity
   */

  add (quantity) {
    validateCommonMetric(this, quantity, 'addend Quantity')
    const { amount, metric } = quantity
    return new Quantity(this.amount + amount, metric)
  }

  /**
   * Calculate the difference of two Quantity objects.
   *
   * @throws {ArgumentError} - If the subtrahend's metric is different from
   * the Quantity.prototype.metric.
   *
   * @param {Quantity} quantity - The subtrahend Quantity.
   * @returns {Quantity} - A new Quantity with an amount equal to the difference of two other Quantity objects.
   * @memberof Quantity
   *
   * @date 2019-10-27
   */

  subtract (quantity) {
    validateCommonMetric(this, quantity, 'subtrahend Quantity')
    const { amount, metric } = quantity
    return new Quantity(this.amount - amount, metric)
  }

  multiply (quantityOrNumber) {
    validateNumberOrCommonMetric(this, quantityOrNumber)
    const factor = get(quantityOrNumber, 'amount', quantityOrNumber)
    const { amount, metric } = this
    const product = amount * factor
    if (isNumber(quantityOrNumber)) {
      return new Quantity(product, metric)
    }
    const derivedUnit = new DerivedUnit({
      definition: null,
      name: `${metric.name} ${quantityOrNumber.metric.name}`,
      symbol: `${metric.symbol}·${quantityOrNumber.metric.symbol}`,
      systemOfUnits: metric.systemOfUnits,
      terms: [
        {
          power: 1,
          unit: metric
        },
        {
          power: -1,
          unit: quantityOrNumber.metric
        }
      ]
    })
    return new Quantity(product, derivedUnit)
  }

  divide (quantityOrNumber) {
    validateNumberOrCommonMetric(this, quantityOrNumber)
    const factor = get(quantityOrNumber, 'amount', quantityOrNumber)
    const { amount, metric } = this
    const quotient = amount / factor
    if (isNumber(quantityOrNumber)) {
      return new Quantity(quotient, metric)
    }
    const derivedUnit = new DerivedUnit({
      definition: null,
      name: `${metric.name} / ${quantityOrNumber.metric.name}`,
      symbol: `${metric.symbol}/${quantityOrNumber.metric.symbol}`,
      systemOfUnits: metric.systemOfUnits,
      terms: [
        {
          power: 1,
          unit: metric
        },
        {
          power: -1,
          unit: quantityOrNumber.metric
        }
      ]
    })
    return new Quantity(quotient, derivedUnit)
  }

  /**
   * @description
   * Approximate an amount of lower precision.
   *
   * @date 2019-11-01
   * @param {RoundingPolicy} roundingPolicy - A rounding configuration.
   * @returns {Quantity} - A new {Quantity} instance with a rounded #amount
   * property.
   * @memberof Quantity
   */

  round (roundingPolicy) {
    const result = roundingPolicy.roundingStrategy(this.amount, roundingPolicy)
    return new Quantity(result, this.metric)
  }

  equalTo (quantity) {
    validateCommonSystemOfUnits(this, quantity)
    return this.amount === quantity.amount
  }

  greaterThan (quantity) {
    validateCommonSystemOfUnits(this, quantity)
    return this.amount > quantity.amount
  }

  lessThan (quantity) {
    ow(quantity, ow.object.instanceOf(Quantity))
    validateCommonSystemOfUnits(this, quantity)
    return this.amount < quantity.amount
  }
}

export default Quantity
