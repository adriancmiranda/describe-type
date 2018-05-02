'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reStringToBoolean = _internalPatternsJs.reStringToBoolean;

var string = require('../is/string/string.js');

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = booleanOf;
function booleanOf(value) {
  if (string(value) && value.length) {
    return reStringToBoolean.test(value);
  }
  return !!value;
}
