import getExpectedValue from '../@/getExpectedValue.js';
import instanceOf from '../is/instanceOf.js';

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function asInstanceOf(expected, value, safe) {
	value = getExpectedValue(expected, value, arguments, 2);
	return instanceOf(expected, value, safe) ? value : arguments[2];
}
