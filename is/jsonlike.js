const { reIsJsonStart, reIsJsonEnds } = require('../internal/patterns.js');
const string = require('./string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function jsonlike(value) {
	if (string(value)) {
		const start = value.match(reIsJsonStart);
		return !!(start && reIsJsonEnds[start[0]].test(value));
	}
	return false;
}
