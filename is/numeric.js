const arraylike = require('./arraylike/arraylike.js');
const bool = require('./bool.js');
const nan = require('./nan.js');
const infinity = require('./infinity.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function numeric(value) {
	if (value === undefined || value === null) return false;
	if (bool(value)) return true;
	try {
		const test = parseFloat(value);
		return (nan(test) || infinity(test) || arraylike(test)) === false;
	} catch (err) {
		return false;
	}
}
