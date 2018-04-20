const instanceOf = require('./instanceOf.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function not(expected, value) {
	return instanceOf(expected, value) === false;
}
