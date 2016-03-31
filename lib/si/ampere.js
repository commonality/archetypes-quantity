'use strict';

var SiBaseUnit, Ampere;

SiBaseUnit = require('./sibaseunit');

Ampere = function() {
  SiBaseUnit.apply(this);
  this.name       = 'ampere';
  this.symbol     = 'A';
  this.definition = '';
};

module.exports = Ampere;
