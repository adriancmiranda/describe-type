import apply from '../@/apply.js';
import slice from '../@/slice.js';
import ownValue from '../has/ownValue.js';
import instanceOf from '../is/instanceOf.js';
import callable from '../is/callable.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function like(expected, value) {
	const args = slice(arguments, 2);
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		value = apply(value, args[0], args, true);
	}
	return instanceOf(expected, value) ? value : args[0];
}
