const constructorOf = require('../../internal/constructorOf.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function object(value) {
	if (value === undefined || value === null) return false;
	return constructorOf(value) === Object;
}
