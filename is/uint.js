const int = require('./int.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function uint(value) {
	return int(value) && value >= 0;
}
