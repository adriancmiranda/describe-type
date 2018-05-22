const { STRING } = require('../../internal/constants.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function string(value) {
	return typeof value === STRING || value instanceof String;
}
