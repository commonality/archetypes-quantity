'use strict';

var Unit, Metric;

Metric = require('./metric');

Unit = function() {
  Metric.apply(this);
  this.systemOfUnits = null;
};

module.exports = Unit;
