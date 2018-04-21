/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default function type(expected, value) {
	if (expected == null || value == null) return value === expected;
	if (value.constructor === expected) return true;
	if (value.constructor === undefined || typeof value === 'object') {
		return expected === Object;
	}
	return expected === Function && (
		value.constructor.name === 'GeneratorFunction' ||
		value.constructor.name === 'AsyncFunction'
	);
}
