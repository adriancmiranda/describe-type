const number = require('./number.js');
const infinity = require('./infinity.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function decimal(value) {
	return number(value) && value === value && infinity(value) === false && value % 1 !== 0;
}
