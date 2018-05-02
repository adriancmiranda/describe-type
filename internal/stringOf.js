'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reFunctionName = _internalPatternsJs.reFunctionName;

var _internalBuiltInJs = require('../internal/built-in.js');

var objectToString = _internalBuiltInJs.objectToString;

var slice = require('../polyfill/Array.prototype.slice.js');

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = stringOf;
function stringOf(value, force) {
	var ctor = value != null && value.constructor;
	if (ctor && force) {
		if (!ctor.name || ctor.name === 'Object') {
			var matches = ctor.toString().match(reFunctionName);
			return matches ? matches[1] : '';
		}
		return ctor.name;
	}
	return slice(objectToString.call(value), 8, -1);
}
