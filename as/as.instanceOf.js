const getExpectedValue = require('../internal/getExpectedValue.js');
const instanceOf = require('../is/instanceOf.js');

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function asInstanceOf(expected, value) {
	value = getExpectedValue(expected, value, arguments, 2);
	return instanceOf(expected, value) ? value : arguments[2];
}
