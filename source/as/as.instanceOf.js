import getExpectedValue from '../internal/getExpectedValue.js';
import instanceOf from '../is/instanceOf.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asInstanceOf(expected, value) {
	value = getExpectedValue(expected, value, arguments, 2);
	return instanceOf(expected, value) ? value : arguments[2];
}
