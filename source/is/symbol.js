import { env } from '../@/env.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function symbol(value) {
	if (value == null) return false;
	return value.constructor === env.Symbol;
}
