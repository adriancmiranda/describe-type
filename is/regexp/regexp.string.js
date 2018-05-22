const { reRegExp } = require('../../internal/patterns.js');
const string = require('../string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isRegExpString(value) {
	if (string(value)) {
		reRegExp.lastIndex = 0;
		return reRegExp.test(value);
	}
	return false;
}
