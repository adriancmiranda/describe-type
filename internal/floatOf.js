const nan = require('../is/nan.js');
const infinity = require('../is/infinity.js');

/**
 * The `floatOf()` function parses an argument and returns a floating point number.
 *
 * @function
 * @memberof to
 *
 * @param {Number|String|Object} value - The value to parse.
 * If the string argument is not a string, then it is converted to a string
 * (using the ToString abstract operation).
 * Leading whitespace in the string argument is ignored.
 *
 * @returns {Number} A floating point number parsed from the given value.
 * If the first character cannot be converted to a number, 0 is returned.
 */
module.exports = function floatOf(value) {
	value = +value;
	return nan(value) || infinity(value) ? 0 : value;
}
