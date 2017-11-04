import name from './name.js';
import arraylike from '../is/arraylike.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Array}
 */
export default function typify(expected, write) {
	if (arraylike(expected) && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			expected[i] = typify(expected[i], write);
		}
		return expected.join('|');
	}
	return name(expected, write);
}
