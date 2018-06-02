const callable = require('../is/callable.js');
const ownValue = require('../has/ownValue.js');
const slice = require('./slice.js');
const apply = require('./apply.js');

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect -
 * @param {any} value -
 * @param {arraylike} args -
 * @param {int} startIndex -
 * @param {int} endIndex -
 * @returns {any}
 */
module.exports = function getExpectedValue(expected, value, args, startIndex, endIndex) {
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		args = slice(args, startIndex, endIndex);
		return apply(value, args[0], args, true);
	}
	return value;
}
