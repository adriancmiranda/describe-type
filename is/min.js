'use strict';

var arraylike = require('./arraylike/arraylike.js');

/**
 *
 * @function
 * @memberof is
 * @param {Number} value
 * @param {arraylike} others
 * @returns {Boolean}
 */
module.exports = min;
function min(value, others) {
	if (value !== value) {
		throw new TypeError('NaN is not a valid value');
	} else if (arraylike(others) === false) {
		throw new TypeError('Second argument must be array-like');
	} else if (others.length === 0) {
		return false;
	}
	for (var i = others.length - 1; i > -1; i -= 1) {
		if (value > others[i]) {
			return false;
		}
	}
	return true;
}
