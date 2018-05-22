/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function regexp(value) {
	return value instanceof RegExp;
}
