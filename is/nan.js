'use strict';

var number = require('./number.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = nan;
function nan(value) {
  var isnum = number(value);
  return isnum === false || isnum && value !== value;
}
