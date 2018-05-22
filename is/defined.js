const undef = require('./undef.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = function defined(value) {
	return undef(value) === false;
}
