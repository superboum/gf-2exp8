var chai = require('chai');
var gf2exp8 = require('../index');

var expect = chai.expect;

describe('add', function(){
  context('when 0x11 + 0xF8', function() {
    it('should return 0x19', function() {
      var res = gf2exp8.add(0x11, 0xF8);
      expect(res).to.equal(0xE9);
    });
  });
});

describe('multiplication', function(){
  context('when 0xB6 * 0x53', function() {
    it('should return 0x36', function(){
      var res = gf2exp8.multiply(0xB6, 0x53);
      expect(res).to.equal(0x36);
    });
  });

  context('when 0x00 * 0x53', function() {
    it('should return 0x00', function(){
      var res = gf2exp8.multiply(0x00, 0x53);
      expect(res).to.equal(0x00);
    });
  });

  context('when 0x53 * 0x00', function() {
    it('should return 0x00', function(){
      var res = gf2exp8.multiply(0x53, 0x00);
      expect(res).to.equal(0x00);
    });
  });
});

