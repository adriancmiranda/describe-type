import getPrototypeOf from '../shim/Object.getPrototypeOf.next.js';
import slice from './slice.next.js';
import { reFunctionName } from './patterns.next.js';
import { objectToString } from './built-in.next.js';

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
export default function stringOf(value, force) {
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
