"use strict";

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = date;
function date(value) {
  return value instanceof Date;
}
