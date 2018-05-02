'use strict';

var arraylike = require('./arraylike/arraylike.js');

var bool = require('./bool.js');

var nan = require('./nan.js');

var infinity = require('./infinity.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = numeric;
function numeric(value) {
	if (value === undefined || value === null) return false;
	if (bool(value)) return true;
	try {
		var test = parseFloat(value);
		return (nan(test) || infinity(test) || arraylike(test)) === false;
	} catch (err) {
		return false;
	}
}
