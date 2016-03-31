'use strict';
var UnitConverter, Quantity, StandardConversion;

Quantity = require('./quantity');
StandardConversion = require('./standardconversion');

UnitConverter = function (standardConversion) {
  this.standardConversion = standardConversion || null;
  this.convert = function(quantity, targetUnit) {

  };
};

module.exports = UnitConverter;
