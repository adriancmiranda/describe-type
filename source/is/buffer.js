import { env } from '../@/env.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function buffer(value) {
	if (value == null) return false;
	return value.constructor === env.Buffer;
}
