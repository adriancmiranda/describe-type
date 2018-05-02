'use strict';

var ownProperty = require('./ownProperty.js');

var ownValue = require('./ownValue.js');

var array = require('../is/array/array.js');

/**
 *
 * @function
 * @memberof has
 * @param {Array|String|Object|Function} context
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = own;
function own(context, value) {
  if (array(context)) return ownValue(context, value);
  return ownProperty(context, value);
}
