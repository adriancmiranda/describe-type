'use strict';

var notAny = require('./not/not.any.js');

var arraylike = require('./arraylike/arraylike.js');

/**
 * TODO: a,an,any
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {arraylike} value
 * @returns {Boolean}
 */
module.exports = vector;
function vector(expected, value) {
  if (arraylike(value) === false) return false;
  for (var i = value.length - 1; i > -1; i -= 1) {
    if (notAny(expected, value[i])) return false;
  }
  return true;
}
