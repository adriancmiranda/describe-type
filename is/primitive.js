const { OBJECT } = require('../internal/constants.js');
const callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function primitive(value) {
	if (value === undefined || value === null) return true;
	if (callable(value.valueOf)) value = value.valueOf();
	if (callable(value) || typeof value === OBJECT) {
		return false;
	}
	return true;
}
