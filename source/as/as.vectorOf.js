import getExpectedValue from '../@/getExpectedValue.js';
import vector from '../is/vector.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asVectorOf(expected, value, safe) {
	value = getExpectedValue(expected, value, arguments, 2);
	if (expected == null) return vector(expected, value, safe);
	if (expected.constructor === Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			if (vector(expected[i], value, safe)) return value;
		}
		return arguments[2];
	}
	return vector(expected, value, safe) ? value : arguments[2];
}
