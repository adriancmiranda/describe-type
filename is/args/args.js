'use strict';

var _internalBuiltInJs = require('../../internal/built-in.js');

var objectToString = _internalBuiltInJs.objectToString;

var _internalEnvJs = require('../../internal/env.js');

var CALLEE = _internalEnvJs.CALLEE;
var ARGUMENTS_SEAL = _internalEnvJs.ARGUMENTS_SEAL;

var unsafeMethod = require('../../has/unsafeMethod.js');

var array = require('../array/array.js');

var object = require('../object/object.js');

var arraylike = require('../arraylike/arraylike.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = args;
function args(value) {
  return array(value) === false && arraylike(value) && object(value) && unsafeMethod(value, CALLEE) || objectToString.call(value) === ARGUMENTS_SEAL;
}
