'use strict';

var Quantity, metricValidator, InvalidMetricError, isNumber, RoundingPolicy, lodash;

isNumber = require('isnumber');
InvalidMetricError = require('./invalidmetricerror');
RoundingPolicy = require('./roundingpolicy');
lodash = require('lodash');

metricValidator = {
  isSameMetric: function (source, target) {
    return source.metric.symbol === target.metric.symbol;
  },
  validate: function (source, target) {
    if (!this.isSameMetric(source, target)) {
      //console.log(InvalidMetricError);
      throw new TypeError('The source and target quantities must share the same Metric type');
    }
    return true;
  }
};

Quantity = function(amount, metric) {
  var roundingPolicy = roundingPolicy || new RoundingPolicy();
  this.amount = amount;
  this.metric = metric;
  this.add = function (quantity) {
    var sum, quantity;
    if (metricValidator.validate(this, quantity)) {
      sum = lodash.round(this.amount + quantity.amount, roundingPolicy.numberOfDigits);
      quantity = new Quantity(sum, this.metric);
    }
    return quantity;
  };
  this.subtract = function (quantity) {
    var diff, quantity;
    if (metricValidator.validate(this, quantity)) {
      diff = lodash.round(this.amount - quantity.amount, roundingPolicy.numberOfDigits);
      quantity = new Quantity(diff, this.metric);
    }
    return quantity;
  }
  this.multilpy = function (multiplierOrQuantity) {
    var amount;
    if (isNumber(multiplierOrQuantity)) {
      amount = lodash.round(this.amount * multiplierOrQuantity, roundingPolicy.numberOfDigits);
    }
    else {
      amount = lodash.round(this.amount * multiplierOrQuantity.amount, roundingPolicy.numberOfDigits);
    }
    return new Quantity(amount, this.metric);
  };
  this.divide = function (divisorOrQuantity) {
    var amount;
    if (isNumber(divisorOrQuantity)) {
      amount =  lodash.round(this.amount / divisorOrQuantity, roundingPolicy.numberOfDigits);
    }
    else {
      amount =  lodash.round(this.amount / divisorOrQuantity.amount, roundingPolicy.numberOfDigits);
    }
    return new Quantity(amount, this.metric);
  };
  this.round = function (policy) {
    roundingPolicy = policy;
    return this;
  };
  this.equalTo = function (quantity) {
    var areEqual = false;
    if (metricValidator.validate(this, quantity)) {
      areEqual = this.amount === quantity.amount;
    }
    return areEqual;
  };
  this.greaterThan = function (quantity) {
    var gt = false;
    if (metricValidator.validate(this, quantity)) {
      gt = this.amount > quantity.amount;
    }
    return gt;
  };
  this.lessThan = function (quantity) {
    var lt = false;
    if (metricValidator.validate(this, quantity)) {
      lt = this.amount < quantity.amount;
    }
    return lt;
  };
};

module.exports = Quantity;
