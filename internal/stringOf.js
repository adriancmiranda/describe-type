const { reFunctionName } = require('../internal/patterns.js');
const { objectToString } = require('../internal/built-in.js');
const slice = require('../polyfill/Array.prototype.slice.js');

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function stringOf(value, force) {
	const ctor = value != null && value.constructor;
	if (ctor && force) {
		if (!ctor.name || ctor.name === 'Object') {
			const matches = ctor.toString().match(reFunctionName);
			return matches ? matches[1] : '';
		}
		return ctor.name;
	}
	return slice(objectToString.call(value), 8, -1);
}
