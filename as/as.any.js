const getExpectedValue = require('../internal/getExpectedValue.js');
const any = require('../is/any.js');

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function asAny(expected, value) {
	value = getExpectedValue(expected, value, arguments, 2);
	return any(expected, value) ? value : arguments[2];
}
