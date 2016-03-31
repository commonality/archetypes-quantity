'use strict';

var InvalidMetricError;

InvalidMetricError = function (message) {
  TypeError.apply(this, arguments);
  this.name = 'InvalidMetricError';
  this.message = message || 'The source and target quantities must share the same Metric type';
}

InvalidMetricError.prototype = new TypeError();

module.export = InvalidMetricError;
