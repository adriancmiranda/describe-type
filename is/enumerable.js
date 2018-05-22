const number = require('./number.js');
const callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function enumerable(value) {
	if (value === undefined || value === null) return false;
	return number(value.length) && callable(value) === false;
}
