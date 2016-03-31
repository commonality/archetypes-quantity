'use strict';

var SiBaseUnit, Mole;

SiBaseUnit = require('./sibaseunit');

Mole = function() {
  SiBaseUnit.apply(this);
  this.name = 'mole';
  this.symbol = 'mol';
  this.definition = 'The amount of substance of a system that contains as many elementary entities as there are atoms in 0.012 kilograms of Carbon 12';
};

module.exports = Mole;
