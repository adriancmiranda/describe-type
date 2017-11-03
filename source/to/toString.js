import { reFunctionName } from '../@/patterns.js';
import { objectToString } from '../@/built-in.js';

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
export default function toString(value, force) {
	const ctor = value && value.constructor;
	if (ctor && force) {
		if (!ctor.name || ctor.name === 'Object') {
			const matches = ctor.toString().match(reFunctionName);
			return matches ? matches[1] : '';
		}
		return ctor.name;
	}
	return objectToString.call(value).slice(8, -1);
}
