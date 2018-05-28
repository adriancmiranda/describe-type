import { reRegExpFlags } from '../../internal/patterns.next.js';
import string from '../string/string.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isRegExpFlags(value) {
	if (string(value)) {
		return reRegExpFlags.test(value);
	}
	return false;
}
