const type = require('../type.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function notType(expected, value) {
	return type(expected, value) === false;
}
