'use strict';

var _internalBuiltInJs = require('../internal/built-in.js');

var objectHasOwnProperty = _internalBuiltInJs.objectHasOwnProperty;

/**
 *
 * @name Object.assign
 * @function
 * @global
 * @param {target}
 * @param {...sources}
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
module.exports = Object.assign || function assign(target) {
	if (target === undefined || target === null) {
		throw new TypeError('Cannot convert undefined or null to object');
	}
	var rest = slice(args, 1);
	for (var index = 1; index < rest.length; index += 1) {
		var source = rest[index];
		if ((source === undefined || source === null) === false) {
			for (var key in source) {
				if (objectHasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
	}
	return target;
};