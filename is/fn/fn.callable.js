const fn = require('./fn.js');
const caste = require('./fn.caste.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function callable(value) {
	return fn(value) && caste(value) === false;
}
