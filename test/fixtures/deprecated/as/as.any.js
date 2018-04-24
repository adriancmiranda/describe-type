import apply from '../../../../source/@/apply.js';
import slice from '../../../../source/@/slice.js';
import ownValue from '../../../../source/has/ownValue.js';
import any from '../../../../source/is/any.js';
import callable from '../../../../source/is/callable.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asAny(expected, value) {
	const args = slice(arguments, 2);
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		value = apply(value, args[0], args, true);
	}
	return any(expected, value) ? value : args[0];
}
