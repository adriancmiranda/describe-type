/* eslint-disable no-underscore-dangle */
const callable = require('../callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function stream(value) {
	if (value === undefined || value === null) return false;
	if (value._events === undefined || value._events === null) return false;
	return callable(value.pipe);
}
