import { reIsJsonStart, reIsJsonEnds } from '../internal/patterns.js';
import string from './string/string.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function jsonlike(value) {
	if (string(value)) {
		const start = value.match(reIsJsonStart);
		return !!(start && reIsJsonEnds[start[0]].test(value));
	}
	return false;
}
