'use strict';

var primitive = require('./primitive.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = exotic;
function exotic(value) {
  return primitive(value) === false;
}
