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
module.exports = decimal;
function decimal(value) {
  return number(value) && value === value && infinity(value) === false && value % 1 !== 0;
}
