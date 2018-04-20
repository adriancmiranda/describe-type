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
	let args = arguments;
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		args = slice(args, 2);
		value = apply(value, args[0], args, true);
	}
	if (expected == null) return vector(expected, value);
	if (expected.constructor === Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			if (vector(expected[i], value)) return value;
		}
		return args[2];
	}
	return vector(expected, value) ? value : args[2];
}
