import getExpectedValue from '../@/getExpectedValue.js';
import a from '../is/a.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asA(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return a(expected, value) ? value : arguments[2];
}
