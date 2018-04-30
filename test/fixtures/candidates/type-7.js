import { objectGetPrototypeOf, objectHasOwnProperty } from '../internal/built-in.js';
import { STRING, NUMBER, SYMBOL, GENERATOR_FUNCTION, ASYNC_FUNCTION, FUNCTION, CONSTRUCTOR } from '../internal/env.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default function type(expected, value) {
	if (value === undefined || value === null) return value === expected;
	if (expected === undefined || expected === null) return expected === value;
	if (value === true || value === false) return expected === Boolean;
	const type = typeof value;
	if (type === STRING) return expected === String;
	if (type === NUMBER) return expected === Number;
	if (type === SYMBOL) return expected === Symbol;
	if (expected === Function) return type === FUNCTION;
	if (value instanceof Array) return expected === Array;
	if (value instanceof RegExp) return expected === RegExp;
	if (value.constructor === undefined) return expected === Object;
	if (value.__proto__) {
		return value.__proto__.constructor === expected;
	}
	if (typeof objectGetPrototypeOf === FUNCTION) {
		return objectGetPrototypeOf(value).constructor === expected;
	}
	return objectHasOwnProperty.call(value, CONSTRUCTOR);
}