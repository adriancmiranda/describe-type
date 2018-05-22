const getExpectedValue = require('../internal/getExpectedValue.js');
const type = require('../is/type.js');

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function asA(expected, value) {
	value = getExpectedValue(expected, value, arguments, 2);
	return type(expected, value) ? value : arguments[2];
}
