var assert = require('assert');
var fbkata = require('../kata');

describe('FizzBuzz Code Kata', function() {
  describe('#fizzbuzz()', function() {
    it('should return same number when the value is not multiple of 3 or 5', function() {
      assert.equal(1, fbkata.fizzbuzz(1));
      assert.equal(2, fbkata.fizzbuzz(2));
      assert.equal(4, fbkata.fizzbuzz(4));
    });
  });


  describe('#fizzbuzz()', function() {
    it('should return Fizz when the value is multiple of 3 but not of 5', function() {
      assert.equal('Fizz', fbkata.fizzbuzz(3));
      assert.equal('Fizz', fbkata.fizzbuzz(9));
    });
  });


  describe('#fizzbuzz()', function() {
    it('should return Buzz when the value is multiple of 5 but not of 3', function() {
      assert.equal('Buzz', fbkata.fizzbuzz(5));
      assert.equal('Buzz', fbkata.fizzbuzz(10));
    });
  });


  describe('#fizzbuzz()', function() {
    it('should return FizzBuzz when the value is multiple of 3 and 5', function() {
      assert.equal('FizzBuzz', fbkata.fizzbuzz(15));
      assert.equal('FizzBuzz', fbkata.fizzbuzz(90));
    });
  });

});