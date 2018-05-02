import intOf from './intOf.next.js';

/**
 * The `uintOf()` function parses a string argument and returns an unsigned integer
 * of the specified radix (the base in mathematical numeral systems).
 *
 * @function
 * @memberof to
 *
 * @param {Number|String|Object} value - The value to parse.
 * If the string argument is not a string, then it is converted to a string
 * (using the ToString abstract operation).
 * Leading whitespace in the string argument is ignored.
 *
 * @param {any} radix - An unsigned integer between 2 and 36 that represents
 * the radix (the base in mathematical numeral systems) of the above mentioned string.
 * Specify 10 for the decimal numeral system commonly used by humans. Always specify
 * this parameter to eliminate reader confusion and to guarantee predictable behavior.
 * Different implementations produce different results when a radix is not specified,
 * usually defaulting the value to 10.
 *
 * @returns {Number} An unsigned integer number parsed from the given string.
 * If the first character cannot be converted to a number, 0 is returned.
 *
 * min: 0
 * max: 0xffffffff
 */
export default function uintOf(value, radix) {
	const num = intOf(value, radix);
	return num < 0 ? 0 : num;
}
