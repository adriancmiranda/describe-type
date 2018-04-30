import { reStringToBoolean } from '../internal/patterns.js';
import string from '../is/string/string.js';

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
