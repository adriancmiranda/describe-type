'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reIsBase64 = _internalPatternsJs.reIsBase64;

var string = require('./string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = base64;
function base64(value) {
  return string(value) && reIsBase64.test(value);
}
