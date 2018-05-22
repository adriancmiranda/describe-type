const { NAN, NUMBER, ARGUMENTS, UNDEFINED, NULL } = require('../internal/constants.js');
const infinity = require('../is/infinity.js');
const nan = require('../is/nan.js');
const args = require('../is/args/args.js');
const stringOf = require('../internal/stringOf.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
module.exports = function typeOf(value) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	if (infinity(value)) return INFINITY;
	if (nan(value)) return NAN;
	return args(value) ? ARGUMENTS : stringOf(value, true);
}
