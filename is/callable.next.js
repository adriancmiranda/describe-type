import { FUNCTION } from '../internal/constants.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function callable(value) {
	return typeof value === FUNCTION;
}
