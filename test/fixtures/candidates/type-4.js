import { objectHasOwnProperty } from '../internal/built-in.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default function type(expected, value) {
	if (value == null || expected == null) return value === expected;
	if (value.constructor === undefined) return expected === Object;
	// if (value instanceof Array) return expected === Array;
	// if (value instanceof RegExp) return expected === RegExp;
	// if (value instanceof Date) return expected === Date;
	const type = typeof value;
	if (type === 'boolean' || value instanceof Boolean) return expected === Boolean;
	if (type === 'number' || value instanceof Number) return expected === Number;
	if (type === 'string' || value instanceof String) return expected === String;
	if (type === 'symbol') return expected === Symbol;
	if (expected === Object === false) return value instanceof expected;
	if (value.constructor === expected) return true;
	return objectHasOwnProperty.call(value, 'constructor');
}
