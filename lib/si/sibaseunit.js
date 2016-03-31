'use strict';

var SiBaseUnit, Unit;

Unit = require('../unit');

SiBaseUnit = function() {
  Unit.apply(this);
  this.nameOfSystem = 'SI';
  this.nameOfStandardizationBody = 'BIPM';
};

module.exports = SiBaseUnit;
