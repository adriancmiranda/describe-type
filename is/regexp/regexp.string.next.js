import { reRegExp } from '../../internal/patterns.next.js';
import string from '../string/string.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isRegExpString(value) {
	if (string(value)) {
		return reRegExp.test(value);
	}
	return false;
}
