'use strict';

var number = require('./number.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = int;
function int(value) {
  return number(value) && value === value && value % 1 === 0;
}
