const array = require('./array.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isEmptyArray(value) {
	return array(value) && value.length === 0;
}
