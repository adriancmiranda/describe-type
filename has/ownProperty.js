'use strict';

var _internalBuiltInJs = require('../internal/built-in.js');

var objectHasOwnProperty = _internalBuiltInJs.objectHasOwnProperty;


/**
 *
 * @function
 * @memberof has
 * @param {Object|Function} context
 * @param {any} key
 * @returns {Boolean}
 */
module.exports = ownProperty;
function ownProperty(context, key) {
  if (context === undefined || context === null) return false;
  return objectHasOwnProperty.call(context, key);
}
