const any = require('../any.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function notAny(expected, value) {
	return any(expected, value) === false;
}
