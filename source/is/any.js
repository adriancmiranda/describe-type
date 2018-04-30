import type from './type.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function any(expected, value) {
	if (expected === undefined || expected === null) return expected === value;
	if (expected instanceof Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			if (type(expected[i], value)) return true;
		}
	}
	return type(expected, value);
}
