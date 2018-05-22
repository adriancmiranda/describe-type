const number = require('./number.js');
const infinity = require('./infinity.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function even(value) {
	return infinity(value) || (number(value) && value === value && value % 2 === 0);
}
