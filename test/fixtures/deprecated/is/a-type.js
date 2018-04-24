/**
 * @deprecated reasons:
 * Doesn't detect correctly:
 * // truthy
 * t.is(is.a(Object, { constructor: 'foo' }), true);
 * t.is(is.a(Object, { constructor: () => {} }), true);
 * t.is(is.a(Object, { constructor: function() {} }), true);
 * t.is(is.a(Object, { constructor: function unit() {} }), true);
 * t.is(is.a(Object, { constructor: Object }), true);
 * t.is(is.a(Object, { constructor: Number }), true);
 * t.is(is.a(Object, { constructor: Function }), true);
 * t.is(is.a(Object, { constructor: undefined }), true);
 * // falsy
 * t.is(is.a(Function, { constructor: 'foo' }), false);
 * t.is(is.a(Function, { constructor: () => {} }), false);
 * t.is(is.a(Function, { constructor: function() {} }), false);
 * t.is(is.a(Function, { constructor: function unit() {} }), false);
 * t.is(is.a(Function, { constructor: Object }), false);
 * t.is(is.a(Function, { constructor: Number }), false);
 * t.is(is.a(Function, { constructor: Function }), false);
 * t.is(is.a(undefined, { constructor: undefined }), false);
 * t.is(is.a(null, { constructor: null }), false);
 * --
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default function a(expected, value) {
	if (expected == null) return value === expected;
	if (value == null) return value === expected;
	if (value.constructor === expected) return true;
	if (value.constructor === undefined) return expected === Object;
	return expected === Function && (
		value.constructor.name === 'GeneratorFunction' ||
		value.constructor.name === 'AsyncFunction'
	);
}
