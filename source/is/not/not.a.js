import type from '../type.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notA(expected, value, safe) {
	return type(expected, value, safe) === false;
}
