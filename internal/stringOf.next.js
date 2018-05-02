import { reFunctionName } from '../internal/patterns.next.js';
import { objectToString } from '../internal/built-in.next.js';
import slice from '../polyfill/Array.prototype.slice.next.js';

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
