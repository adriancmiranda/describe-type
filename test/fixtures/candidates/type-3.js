import getPrototypeOf from '../@/getPrototypeOf.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default function type(expected, value) {
	if (value == null) return value === expected;
	if (typeof expected === 'function' === false) return value === expected;
	if (value instanceof Array) return expected === Array;
	if (typeof value.constructor === 'function' === false || objectHasOwnProperty.call(value, 'constructor')) {
		return expected === Object;
	}
	const type = typeof value;
	if (type === 'number' || value instanceof Number) return expected === Number;
	if (type === 'string' || value instanceof String) return expected === String;
	if (type === 'boolean' || value instanceof Boolean) return expected === Boolean;
	if (type === 'symbol') return expected === Symbol;
	if (type === 'function') return expected === Function;
	if (expected === Object === false) return value instanceof expected;
	if (value.constructor === expected) return true;
	return false;
}

