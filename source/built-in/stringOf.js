import { reFunctionName } from '../internal/patterns.js';
import { objectToString } from '../internal/built-in.js';
import slice from '../polyfill/Array.prototype.slice.js';

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
export default function stringOf(value, force) {
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
