import apply from '../@/apply.js';
import slice from '../@/slice.js';
import ownValue from '../has/ownValue.js';
import any from '../is/any.js';
import callable from '../is/callable.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function as(expected, value) {
	let args = arguments;
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		args = slice(args, 2);
		value = apply(value, args[0], args, true);
	}
	return any(expected, value) ? value : args[2];
}
