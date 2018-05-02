'use strict';

var _internalEnvJs = require('../internal/env.js');

var env = _internalEnvJs.env;

var callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = buffer;
function buffer(value) {
  if (value === undefined || value === null) return false;
  if (callable(env.Buffer) === false) return false;
  var isBuffer = value instanceof env.Buffer && callable(value.constructor.isBuffer);
  return isBuffer && value.constructor.isBuffer(value);
}
