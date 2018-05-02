import type from '../type.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notType(expected, value) {
	return type(expected, value) === false;
}
