const arraylike = require('../is/arraylike/arraylike.js');
const string = require('../is/string/string.js');
const name = require('./name.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Array}
 */
module.exports = function typify(expected, write) {
	if (string(expected) === false && arraylike(expected) && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			expected[i] = name(expected[i], write);
		}
		return expected.join('|');
	}
	return name(expected, write);
}
