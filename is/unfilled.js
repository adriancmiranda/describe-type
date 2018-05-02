"use strict";

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = unfilled;
function unfilled(value) {
  return value === undefined || value === null;
}
