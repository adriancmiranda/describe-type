import { reIsBase64 } from '../internal/patterns.next.js';
import string from './string/string.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function base64(value) {
	return string(value) && reIsBase64.test(value);
}
