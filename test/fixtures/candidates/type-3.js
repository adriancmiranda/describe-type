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
	if (value.constructor === undefined) return expected === Object;
	if (value.constructor === expected) {
		switch(value.constructor) {
			case Number: return expected === Number;
			case String: return expected === String;
			case Boolean: return expected === Boolean;
			case Array: return expected === Array;
			case Symbol: return expected === Symbol;
		}
		if (value instanceof expected) return true;
		if (typeof value === 'object') return expected === Object;
		return true;
	}
	return expected === Function && (
		value.constructor.name === 'GeneratorFunction' ||
		value.constructor.name === 'AsyncFunction'
	) || getPrototypeOf(value).constructor === expected;
}
