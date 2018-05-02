'use strict';

var args = require('./args.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = isEmptyArgs;
function isEmptyArgs(value) {
  return args(value) && value.length === 0;
}
