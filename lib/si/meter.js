'use strict';

var SiBaseUnit, Meter;

SiBaseUnit = require('./sibaseunit');

Meter = function() {
  SiBaseUnit.apply(this);
  this.name = 'meter';
  this.symbol = 'm';
  this.definition = 'Length of a path travelled by light in a vacuum during a time interval of 1/299792459 of a second';
};

module.exports = Meter;
