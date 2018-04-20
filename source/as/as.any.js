import getExpectedValue from '../@/getExpectedValue.js';
import any from '../is/any.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function as(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return any(expected, value) ? value : arguments[2];
}
