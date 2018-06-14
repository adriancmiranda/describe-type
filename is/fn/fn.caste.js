const { reIsClass } = require('../../internal/patterns.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function caste(value) {
	return reIsClass.test(String(value));
}
