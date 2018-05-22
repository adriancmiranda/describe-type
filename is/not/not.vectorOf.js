const vector = require('../vector.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function notVectorOf(expected, value) {
	return vector(expected, value) === false;
}
