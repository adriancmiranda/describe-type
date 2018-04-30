import callable from '../is/callable.js';
import ownValue from '../has/ownValue.js';
import slice from '../polyfill/Array.prototype.slice.js';
import apply from './apply.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect -
 * @param {any} value -
 * @param {arraylike} args -
 * @param {int} startIndex -
 * @param {int} endIndex -
 * @returns {any}
 */
export default function getExpectedValue(expected, value, args, startIndex, endIndex) {
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		args = slice(args, startIndex, endIndex);
		return apply(value, args[0], args, true);
	}
	return value;
}
