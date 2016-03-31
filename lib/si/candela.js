'use strict';

var SiBaseUnit, Candela;

SiBaseUnit = require('./sibaseunit');

Candela = function() {
  SiBaseUnit.apply(this);
  this.name = 'candela';
  this.symbol = 'cd';
  this.definition = 'The luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequancy';
};

module.exports = Candela;
