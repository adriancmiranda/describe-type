import is from '../@/is.js';
import getPrototypeOf from '../@/getPrototypeOf.js';
import { objectHasOwnProperty } from '../@/built-in.js';
import { NUMBER, BOOLEAN, FUNCTION, STRING, SYMBOL } from '../@/env.js';


/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default function type(expected, value) {
	if (value == null) { return expected === value; };
	if (expected == null) { return expected === value; };
	if (value.constructor === undefined) { return expected === Object };
	switch(typeof value) {
		case NUMBER: return expected === Number;
		case BOOLEAN: return expected === Boolean;
		case FUNCTION: return expected === Function;
		case STRING: return expected === String;
		case SYMBOL: return expected === Symbol;
	}
	if (expected === Object === false) { return value instanceof expected };
	if (expected === value.constructor) { return true };
	return expected === getPrototypeOf(value).constructor;
}
