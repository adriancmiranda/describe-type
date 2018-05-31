const getPrototypeOf = require('../shim/Object.getPrototypeOf.js');
const slice = require('../ponyfill/Array.prototype.slice.js');
const { reFunctionName } = require('./patterns.js');
const { objectToString } = require('./built-in.js');

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function stringOf(value, force) {
	if (value === undefined === false && value === null === false) {
		const proto = getPrototypeOf(value);
		const ctor = proto.constructor;
		if (ctor && force) {
			if (!ctor.name || ctor.name === 'Object') {
				const matches = ctor.toString().match(reFunctionName);
				return matches ? matches[1] : '';
			}
			return ctor.name;
		}
	}
	return slice(objectToString.call(value), 8, -1);
}
