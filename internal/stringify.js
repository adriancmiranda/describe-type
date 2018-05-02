'use strict';

var type = require('../is/type.js');

var asType = require('../as/as.type.js');

var startsWith = require('../polyfill/String.prototype.startsWith.js');

var _internalEnvJs = require('../internal/env.js');

var UNDEFINED = _internalEnvJs.UNDEFINED;
var NULL = _internalEnvJs.NULL;
var PREFIX_SEAL = _internalEnvJs.PREFIX_SEAL;
// TODO: to implement
module.exports = stringify;
function stringify(value, replacer, space) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	var seal = asType(String, value.toString, value);
	if (startsWith(seal, PREFIX_SEAL)) seal = '';
	return seal || JSON.stringify(value, replacer, space);
}
