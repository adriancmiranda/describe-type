const getExpectedValue = require('../internal/getExpectedValue.js');
const arrayOf = require('../is/array/array.of.js');

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function asArrayOf(expected, value) {
	value = getExpectedValue(expected, value, arguments, 2);
	if (expected === undefined || expected === null) return arrayOf(expected, value);
	if (expected instanceof Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			if (arrayOf(expected[i], value)) return value;
		}
		return arguments[2];
	}
	return arrayOf(expected, value) ? value : arguments[2];
}
