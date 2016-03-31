'use strict';

var SiBaseUnit, Kilogram;

SiBaseUnit = require('./sibaseunit');

Kilogram = function() {
  SiBaseUnit.apply(this);
  this.name = 'kilogram';
  this.symbol = 'kg';
  this.definition = 'The unit of mass equal to the international standard';
};

module.exports = Kilogram;
