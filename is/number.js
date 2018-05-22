const { NUMBER } = require('../internal/constants.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function number(value) {
	return typeof value === NUMBER || value instanceof Number;
}
