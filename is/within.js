'use strict';

var floatOf = require('../internal/floatOf.js');

var infinity = require('./infinity.js');

/**
 *
 * @function
 * @memberof is
 * @param {Number} value
 * @param {Number} start
 * @param {Number} finish
 * @returns {Boolean}
 */
module.exports = within;
function within(value, start, finish) {
  value = floatOf(value);
  start = floatOf(start);
  finish = floatOf(finish);
  return infinity(value) || infinity(start) || infinity(finish) || value >= start && value <= finish;
}
