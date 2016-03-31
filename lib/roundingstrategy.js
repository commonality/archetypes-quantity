'use strict';

var RoundingStrategy;

RoundingStrategy = function (options) {
  options = options || {};
  this.ROUND_UP              = options.roundUp || 0;
  this.ROUND_DOWN            = options.roundDown || 0;
  this.ROUND                 = options.round || 5;
  this.ROUND_UP_BY_STEP      = options.roundUpByStep || 0;
  this.ROUND_DOWN_BY_STEP    = options.roundDownByStep || 0;
  this.ROUND_TOWARDS_POSITIVE= options.roundTowardsPositive || 0;
  this.ROUND_TOWARDS_NEGATIVE= options.roundTowardsNegative || 0;
};

module.exports = RoundingStrategy;
