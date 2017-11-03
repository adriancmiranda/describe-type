import slice from '../@/slice.js';
import ownValue from '../has/ownValue.js';
import any from '../is/common/any.js';
import callable from '../is/shortcuts/callable.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function as(expected, value) {
	const args = slice(arguments, 2);
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		value = value.apply(void 0, args);
	}
	return any(expected, value) ? value : args[0];
}
