import { reStringToBoolean } from '../@/patterns.js';
import string from '../is/string.js';

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
export default function toBoolean(value) {
	if (string(value)) {
		return reStringToBoolean.test(value);
	}
	return !!value;
}
