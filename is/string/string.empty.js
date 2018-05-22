const string = require('./string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isEmptyString(value) {
	return string(value) && value.length === 0;
}
