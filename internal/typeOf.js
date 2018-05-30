const infinity = require('../is/infinity.js');
const args = require('../is/args/args.js');
const stringOf = require('./stringOf.js');
const { NAN, ARGUMENTS, UNDEFINED, NULL, INFINITY } = require('./constants.js');

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
	if (value !== value) return NAN;
	if (infinity(value)) return INFINITY;
	return args(value) ? ARGUMENTS : stringOf(value, true);
}
