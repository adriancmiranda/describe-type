import is from '../@/is.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default function a(expected, value, safe) {
	if (expected == null) return value === expected;
	if (value == null) return value === expected;
	if (typeof value === 'number' || value instanceof Number) return expected === Number;
	if (value.constructor === expected) return true;
	if (value.constructor === undefined) return expected === Object;
	return expected === Function && (
		value.constructor.name === 'GeneratorFunction' ||
		value.constructor.name === 'AsyncFunction'
	);
}
