'use strict';

var undef = require('./undef.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = defined;
function defined(value) {
  return undef(value) === false;
}
