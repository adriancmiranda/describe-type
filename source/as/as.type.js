import getExpectedValue from '../@/getExpectedValue.js';
import type from '../is/type.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asA(expected, value, safe) {
	value = getExpectedValue(expected, value, arguments, 2);
	return type(expected, value, safe) ? value : arguments[2];
}
