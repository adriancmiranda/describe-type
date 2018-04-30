import getExpectedValue from '../internal/getExpectedValue.js';
import any from '../is/any.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asAny(expected, value) {
	value = getExpectedValue(expected, value, arguments, 2);
	return any(expected, value) ? value : arguments[2];
}
