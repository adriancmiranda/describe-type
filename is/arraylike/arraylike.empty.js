'use strict';

var arraylike = require('./arraylike.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = isEmptyArraylike;
function isEmptyArraylike(value) {
  return arraylike(value) && value.length === 0;
}
