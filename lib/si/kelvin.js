'use strict';

var SiBaseUnit, Kelvin;

SiBaseUnit = require('./sibaseunit');

Kelvin = function() {
  SiBaseUnit.apply(this);
  this.name = 'kelvin';
  this.symbol = 'K';
  this.definition = 'The thermodynamic temperature 1/273.16 the temperature of the triple point of water';
};

module.exports = Kelvin;
