'use strict';

var vector = require('../vector.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = notVectorOf;
function notVectorOf(expected, value) {
  return vector(expected, value) === false;
}
