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
	if (value == null || expected == null) return value === expected;
	if (value.constructor === undefined) return expected === Object;
	if (value.constructor === expected) {
		switch(typeof value) {
			case 'number': return expected === Number;
			case 'string': return expected === String;
			case 'boolean': return expected === Boolean;
		}
		if (value instanceof expected) return true;
	}
	return expected === Function && (
		value.constructor.name === 'GeneratorFunction' ||
		value.constructor.name === 'AsyncFunction'
	) || getPrototypeOf(value).constructor === expected;
}
