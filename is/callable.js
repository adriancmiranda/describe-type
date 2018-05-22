const { FUNCTION } = require('../internal/constants.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function callable(value) {
	return typeof value === FUNCTION;
}
