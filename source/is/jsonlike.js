import { reIsJsonStart, reIsJsonEnds } from '../@/patterns.js';
import string from './string.js';

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
