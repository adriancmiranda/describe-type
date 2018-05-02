import { STRING } from '../../internal/env.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function string(value) {
	return typeof value === STRING || value instanceof String;
}
