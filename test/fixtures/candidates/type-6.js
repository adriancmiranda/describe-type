import { objectGetPrototypeOf, objectHasOwnProperty } from '../internal/built-in.js';
import { NUMBER, BOOLEAN, FUNCTION, STRING, SYMBOL, OBJECT } from '../internal/env.js';


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
	if (value.constructor === undefined) return expected === Object;
	{
		const type = typeof value;
		if (type === NUMBER) return expected === Number;
		if (type === BOOLEAN) return expected === Boolean;
		if (type === STRING) return expected === String;
		if (type === SYMBOL) return expected === Symbol;
		if (type === FUNCTION) return expected === Function;
	}
	if (expected === undefined || expected === null) return expected === value;
	if (expected === Object === false) return value instanceof expected;
	if (value.constructor === expected) return true;
	if (value.__proto__ == null === false) {
		return value.__proto__.constructor === expected;
	}
	if (typeof objectGetPrototypeOf === FUNCTION) {
		return objectGetPrototypeOf(value).constructor === expected;
	}
	return objectHasOwnProperty.call(value, 'constructor');
}
