'use strict';

var number = require('./number.js');

var infinity = require('./infinity.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = even;
function even(value) {
  return infinity(value) || number(value) && value === value && value % 2 === 0;
}
