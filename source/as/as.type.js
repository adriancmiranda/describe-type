import getExpectedValue from '../@/getExpectedValue.js';
import type from '../is/type.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asA(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return type(expected, value) ? value : arguments[2];
}
