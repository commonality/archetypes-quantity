'use strict';

var SiBaseUnit, Second;

SiBaseUnit = require('./sibaseunit');

Second = function() {
  SiBaseUnit.apply(this);
  this.name = 'second';
  this.symbol = 's';
  this.definition = 'The duraton of 9,192,631,770 periods of the radition corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom';
};

module.exports = Second;
