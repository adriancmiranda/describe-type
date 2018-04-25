import getExpectedValue from '../@/getExpectedValue.js';
import any from '../is/any.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asAny(expected, value, safe) {
	value = getExpectedValue(expected, value, arguments, 2);
	return any(expected, value, safe) ? value : arguments[2];
}
