const number = require('./number.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function nan(value) {
	const isnum = number(value);
	return isnum === false || (isnum && value !== value);
}
