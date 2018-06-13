const arrayOf = require('../array/array.of.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function notArrayOf(expected, value) {
	return arrayOf(expected, value) === false;
}
