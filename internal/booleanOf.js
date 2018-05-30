const { reStringToBoolean } = require('./patterns.js');
const string = require('../is/string/string.js');

/**
 *
 * @function
 * @memberof to
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function booleanOf(value) {
	if (string(value) && value.length) {
		return reStringToBoolean.test(value);
	}
	return !!value;
}
