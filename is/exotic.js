const primitive = require('./primitive.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = function exotic(value) {
	return primitive(value) === false;
}
