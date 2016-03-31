'use strict';

var RoundingPolicy, lodash;
lodash = require('lodash');

RoundingPolicy = function (options, roundingStrategy) {
  options = options || {};
  this.numberOfDigits = options.numberOfDigits || 0;
  this.roundingDigit = options.roundingDigit || 0;
  this.roundingStep = options.roundingStep || 0;
  this.roundingStrategy = roundingStrategy || {};
};

module.exports = RoundingPolicy;
