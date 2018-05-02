"use strict";

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = bool;
function bool(value) {
  return value === true || value === false || value instanceof Boolean;
}
