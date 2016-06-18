var expTable = require('./lookup-table/exp');
var logTable = require('./lookup-table/log');

exports.add = function(a, b) {
  return a ^ b;
}

exports.multiply = function(a, b) {
  if (a === 0x00 || b === 0x00) {
    return 0x00
  }
  var logA = logTable[a];
  var logB = logTable[b];
  // notice the plus below should be normal add but not GF(2^8) add!
  var logA_plus_logB = (logA + logB) % 0xff;
  return expTable[logA_plus_logB];
}