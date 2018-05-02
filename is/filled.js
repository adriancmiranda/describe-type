'use strict';

var unfilled = require('./unfilled.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = filled;
function filled(value) {
  return unfilled(value) === false;
}
