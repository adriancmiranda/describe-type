const arraylikeEmpty = require('./arraylike/arraylike.empty.js');
const objectEmpty = require('./object/object.empty.js');
const callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function empty(value) {
	if (value === undefined || value === null) {
		return true;
	}
	if (arraylikeEmpty(value)) {
		return true;
	}
	if (objectEmpty(value)) {
		return true;
	}
	if (callable(value.valueOf)) {
		return !value.valueOf();
	}
	return !value;
}
