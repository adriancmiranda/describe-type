"use strict";

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = regexp;
function regexp(value) {
  return value instanceof RegExp;
}
