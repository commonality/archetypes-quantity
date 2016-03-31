'use strict';
var StandardConversion;

StandardConversion = function (conversionFactor, sourceUnit, targetUnit) {
  this.conversionFactor = conversionFactor || 0;
  this.sourceUnit = sourceUnit || null;
  this.targetUnit = targetUnit || null;
};

module.exports = StandardConversion;
