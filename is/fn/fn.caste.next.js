import { reIsClass } from '../../internal/patterns.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function caste(value) {
	return reIsClass.test(String(value));
}
