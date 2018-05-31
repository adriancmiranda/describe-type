import callable from '../is/callable.next.js';
import ownValue from '../has/ownValue.next.js';
import slice from '../ponyfill/Array.prototype.slice.next.js';
import apply from './apply.next.js';

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
