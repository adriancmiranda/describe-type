import type from './type.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function any(expected, value, safe) {
	if (expected == null) return expected === value;
	if (expected.constructor === Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			if (type(expected[i], value, safe)) return true;
		}
	}
	return type(expected, value, safe);
}
