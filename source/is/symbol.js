import { SYMBOL } from '../internal/env.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function symbol(value) {
	return typeof value === SYMBOL;
}
