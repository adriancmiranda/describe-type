import { reStringToBoolean } from './patterns.next.js';
import string from '../is/string/string.next.js';

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
export default function booleanOf(value) {
	if (string(value) && value.length) {
		return reStringToBoolean.test(value);
	}
	return !!value;
}
