'use strict';

var getExpectedValue = require('../internal/getExpectedValue.js');

var instanceOf = require('../is/instanceOf.js');

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = asInstanceOf;
function asInstanceOf(expected, value) {
  value = getExpectedValue(expected, value, arguments, 2);
  return instanceOf(expected, value) ? value : arguments[2];
}
