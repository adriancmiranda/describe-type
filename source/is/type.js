/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
function type(expected, value, safe) {
	if (expected == null || value == null) return value === expected;
	if (typeof value === 'number' || value instanceof Number) return expected === Number;
	if (safe) value = value.__proto__ || value;
	if (value.constructor === expected) return true;
	if (value.constructor === undefined) return expected === Object;
	return expected === Function && (
		value.constructor.name === 'GeneratorFunction' ||
		value.constructor.name === 'AsyncFunction'
	);
}

type.safe = function typeSafe(expected, value) {
	return type(expected, value, true);
};

export default type;
