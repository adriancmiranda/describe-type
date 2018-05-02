'use strict';

var _internalEnvJs = require('../internal/env.js');

var NAN = _internalEnvJs.NAN;
var NUMBER = _internalEnvJs.NUMBER;
var ARGUMENTS = _internalEnvJs.ARGUMENTS;
var UNDEFINED = _internalEnvJs.UNDEFINED;
var NULL = _internalEnvJs.NULL;

var infinity = require('../is/infinity.js');

var nan = require('../is/nan.js');

var args = require('../is/args/args.js');

var stringOf = require('../internal/stringOf.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
module.exports = typeOf;
function typeOf(value) {
  if (value === undefined) return UNDEFINED;
  if (value === null) return NULL;
  if (infinity(value)) return INFINITY;
  if (nan(value)) return NAN;
  return args(value) ? ARGUMENTS : stringOf(value, true);
}
