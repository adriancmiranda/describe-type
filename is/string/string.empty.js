'use strict';

var string = require('./string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = isEmptyString;
function isEmptyString(value) {
  return string(value) && value.length === 0;
}
