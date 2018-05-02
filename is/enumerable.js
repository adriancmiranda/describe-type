'use strict';

var number = require('./number.js');

var callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = enumerable;
function enumerable(value) {
  if (value === undefined || value === null) return false;
  return number(value.length) && callable(value) === false;
}
