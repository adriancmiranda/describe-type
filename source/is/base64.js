import { reIsBase64 } from '../@/patterns.js';
import string from './string/string.js';

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
