const number = require('./number.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function infinity(value) {
	return number(value) && (value - 1) === value;
}
