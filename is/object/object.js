'use strict';

var constructorOf = require('../../internal/constructorOf.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = object;
function object(value) {
  if (value === undefined || value === null) return false;
  return constructorOf(value) === Object;
}
