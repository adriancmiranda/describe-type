const unfilled = require('./unfilled.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = function filled(value) {
	return unfilled(value) === false;
}
