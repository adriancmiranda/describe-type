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
		value = value.apply(args[0], args);
	}
	return instanceOf(expected, value) ? value : args[0];
}
