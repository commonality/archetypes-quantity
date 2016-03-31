var expect = require('expect.js'),
    jsquantity = require('../lib'),
    Meter = require('../lib/si/meter'),
    Ampere = require('../lib/si/ampere'),
    q1, q2, q3, roundingPolicy, roundingStrategy;

beforeEach(function() {
  roundingStrategy = new jsquantity.RoundingStrategy({
    round: 5
  });
  roundingPolicy = new jsquantity.RoundingPolicy({
    numberOfDigits: 3
  });
  q1 = new jsquantity.Quantity(1, new Meter());
  q1.round(roundingPolicy);
  q2 = new jsquantity.Quantity(2, new Meter());
  q2.round(roundingPolicy);
  q3 = new jsquantity.Quantity(1, new Meter());
  q3.round(roundingPolicy);
});

describe('jsquantity.Quantity', function() {

  it('adds quantities', function () {
    expect(q1.add(q2).amount).to.be.equal(3);
  });

  it('subtracts quantities', function () {
    expect(q1.subtract(q2).amount).to.be.equal(-1);
  });

  it('multilpies quantities', function () {
    expect(q1.multilpy(q2).amount).to.be.equal(2);
    expect(q1.multilpy(4).amount).to.be.equal(4);
  });

  it('divides quantities', function () {
    expect(q1.divide(q2).amount).to.be.equal(0.5);
    expect(q1.divide(4).amount).to.be.equal(0.25);
  });

  it('evaluates whether quantities are equal to each other', function () {
    expect(q1.equalTo(q2)).to.be.equal(false);
    expect(q1.equalTo(q3)).to.be.equal(true);
  });

  it('evaluates whether quantities are greater than each other', function () {
    expect(q1.greaterThan(q2)).to.be.equal(false);
    expect(q1.greaterThan(q3)).to.be.equal(false);
    expect(q2.greaterThan(q1)).to.be.equal(true);
  });

  it('evaluates whether quantities are less than each other', function () {
    expect(q1.lessThan(q2)).to.be.equal(true);
    expect(q1.lessThan(q3)).to.be.equal(false);
    expect(q2.lessThan(q1)).to.be.equal(false);
  });

  it('throws a TypeError if the compared quantities have different metrics', function () {
    q3 = new jsquantity.Quantity(0, new Ampere());
    //expect(q1.add(q3).amount).to.be.equal(3);
    //expect(q1.add(q3)).to.throw(new TypeError());
    //expect(q1.subtract(q3)).to.throw(Error);
    //expect(q1.multilpy(q3)).to.throw(Error);
    //expect(q1.divide(q3)).to.throw(Error);
    //expect(q1.equalTo(q3)).to.throw(Error);
    //expect(q1.greaterThan(q3)).to.throw(Error);
    //expect(q1.lessThan(q3)).to.throw(Error);
  });

  it('rounds mathematical operations according to a roundling policy', function () {
    // addition
    q1.amount = 142.300;
    q2.amount = 0.012;
    roundingPolicy.numberOfDigits = 2;
    expect(q1.round(roundingPolicy).add(q2).amount).to.be.equal(142.31);
    roundingPolicy.numberOfDigits = 1;
    expect(q1.add(q2).amount).to.be.equal(142.3);
    roundingPolicy.numberOfDigits = 0;
    expect(q1.add(q2).amount).to.be.equal(142);
    roundingPolicy.numberOfDigits = -1;
    expect(q1.add(q2).amount).to.be.equal(140);
    roundingPolicy.numberOfDigits = -2;
    expect(q1.add(q2).amount).to.be.equal(100);
    // subtraction
    q1.amount = 142.312;
    q2.amount = 0.012;
    roundingPolicy.numberOfDigits = 2;
    expect(q1.subtract(q2).amount).to.be.equal(142.30);
    roundingPolicy.numberOfDigits = 1;
    expect(q1.subtract(q2).amount).to.be.equal(142.3);
    roundingPolicy.numberOfDigits = 0;
    expect(q1.subtract(q2).amount).to.be.equal(142);
    roundingPolicy.numberOfDigits = -1;
    expect(q1.subtract(q2).amount).to.be.equal(140);
    roundingPolicy.numberOfDigits = -2;
    expect(q1.subtract(q2).amount).to.be.equal(100);
    // multiplication
    q1.amount = 4.312;
    q2.amount = 1;
    roundingPolicy.numberOfDigits = 2;
    expect(q1.multilpy(q2).amount).to.be.equal(4.31);
    roundingPolicy.numberOfDigits = 1;
    expect(q1.multilpy(q2).amount).to.be.equal(4.3);
    roundingPolicy.numberOfDigits = 0;
    expect(q1.multilpy(q2).amount).to.be.equal(4);
    roundingPolicy.numberOfDigits = -1;
    expect(q1.multilpy(q2).amount).to.be.equal(0);
    roundingPolicy.numberOfDigits = -2;
    expect(q1.multilpy(q2).amount).to.be.equal(0);
    // division
    q1.amount = 16.312;
    q2.amount = 4;
    roundingPolicy.numberOfDigits = 2;
    expect(q1.divide(q2).amount).to.be.equal(4.08);
    roundingPolicy.numberOfDigits = 1;
    expect(q1.divide(q2).amount).to.be.equal(4.1);
    roundingPolicy.numberOfDigits = 0;
    expect(q1.divide(q2).amount).to.be.equal(4);
    roundingPolicy.numberOfDigits = -1;
    expect(q1.divide(q2).amount).to.be.equal(0);
    roundingPolicy.numberOfDigits = -2;
    expect(q1.divide(q2).amount).to.be.equal(0);
  });
});
