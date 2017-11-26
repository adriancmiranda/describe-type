import apply from '../@/apply.js';
import slice from '../@/slice.js';
import ownValue from '../has/ownValue.js';
import vector from '../is/vector.js';
import callable from '../is/callable.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asVectorOf(expected, value) {
	const args = slice(arguments, 2);
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		value = apply(value, args[0], args, true);
	}
	if (expected == null) return vector(expected, value);
	if (expected.constructor === Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			if (vector(expected[i], value)) return value;
		}
		return args[0];
	}
	return vector(expected, value) ? value : args[0];
}
