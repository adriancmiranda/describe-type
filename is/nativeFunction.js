'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reIsNativeFn = _internalPatternsJs.reIsNativeFn;

var callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = nativeFunction;
function nativeFunction(value) {
  return callable(value) && reIsNativeFn.test(value.toString());
}
