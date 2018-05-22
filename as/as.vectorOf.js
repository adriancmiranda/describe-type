const getExpectedValue = require('../internal/getExpectedValue.js');
const vector = require('../is/vector.js');

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function asVectorOf(expected, value) {
	value = getExpectedValue(expected, value, arguments, 2);
	if (expected === undefined || expected === null) return vector(expected, value);
	if (expected instanceof Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			if (vector(expected[i], value)) return value;
		}
		return arguments[2];
	}
	return vector(expected, value) ? value : arguments[2];
}
