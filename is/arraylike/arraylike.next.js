import { OBJECT, NUMBER } from '../../internal/env.next.js';
import array from '../array/array.next.js';
import string from '../string/string.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function arraylike(value) {
	return array(value) || string(value) || (
		(!!value && typeof value === OBJECT && typeof value.length === NUMBER) &&
		(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
	);
}
