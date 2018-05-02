'use strict';

var typeOf = require('./typeOf.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
module.exports = constructorNameOf;
function constructorNameOf(value) {
  var name = typeOf(value);
  return name === 'Function' && value != null && value.name || name;
}
