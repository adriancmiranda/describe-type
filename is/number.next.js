import { NUMBER } from '../internal/env.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function number(value) {
	return typeof value === NUMBER || value instanceof Number;
}
