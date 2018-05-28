const { reRegExpFlags } = require('../../internal/patterns.js');
const string = require('../string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isRegExpFlags(value) {
	if (string(value)) {
		return reRegExpFlags.test(value);
	}
	return false;
}
