const arraylike = require('./arraylike.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isEmptyArraylike(value) {
	return arraylike(value) && value.length === 0;
}
