'use strict';

var type = require('./type.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = any;
function any(expected, value) {
  if (expected === undefined || expected === null) return expected === value;
  if (expected instanceof Array && expected.length > 0) {
    for (var i = expected.length - 1; i > -1; i -= 1) {
      if (type(expected[i], value)) return true;
    }
  }
  return type(expected, value);
}
