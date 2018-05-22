const { OBJECT, NUMBER } = require('../../internal/constants.js');
const array = require('../array/array.js');
const string = require('../string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function arraylike(value) {
	return array(value) || string(value) || (
		(!!value && typeof value === OBJECT && typeof value.length === NUMBER) &&
		(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
	);
}
