"use strict";

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = error;
function error(value) {
  return value instanceof Error;
}
