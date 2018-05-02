'use strict';

var array = require('./array.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = isEmptyArray;
function isEmptyArray(value) {
  return array(value) && value.length === 0;
}
