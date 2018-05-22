const { objectHasOwnProperty } = require('../../internal/built-in.js');
const object = require('./object.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isEmptyObject(value) {
	if (object(value) === false) return false;
	for (const key in value) {
		if (objectHasOwnProperty.call(value, key)) {
			return false;
		}
	}
	return true;
}
