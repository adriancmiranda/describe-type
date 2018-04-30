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
	const type = typeof value;
	if (value == null || expected == null) return value === expected;
	else if (value.constructor === undefined) return expected === Object;
	else if (value === 0 || value === 0.0) return expected === Number;
	else if (type === 'number' || value instanceof Number) return expected === Number;
	else if (type === 'boolean' || value instanceof Boolean) return expected === Boolean;
	else if (type === 'function') return expected === Function;
	else if (type === 'string' || value instanceof String) return expected === String;
	else if (type === 'symbol') return expected === Symbol;
	else if (value instanceof Date) return expected === Date;
	else if (value instanceof Array) return expected === Array;
	else if (value instanceof RegExp) return expected === RegExp;
	else if (expected === Object === false) return value instanceof expected;
	else if (value.constructor === expected) return true;
	return objectHasOwnProperty.call(value, 'constructor');
}
