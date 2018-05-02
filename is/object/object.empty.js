'use strict';

var _internalBuiltInJs = require('../../internal/built-in.js');

var objectHasOwnProperty = _internalBuiltInJs.objectHasOwnProperty;

var object = require('./object.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = isEmptyObject;
function isEmptyObject(value) {
	if (object(value) === false) return false;
	for (var key in value) {
		if (objectHasOwnProperty.call(value, key)) {
			return false;
		}
	}
	return true;
}
