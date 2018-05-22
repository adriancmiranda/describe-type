const { SYMBOL } = require('../internal/constants.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function symbol(value) {
	return typeof value === SYMBOL;
}
