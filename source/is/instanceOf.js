import callable from './callable.js';
import type from './type.js';

/**
 * TODO: a,an,any
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function instanceOf(expected, value, safe) {
	if (expected == null) return expected === value;
	if (expected.constructor === Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			const ctor = expected[i];
			if (ctor === Number) return type(ctor, value, safe); // ... should normalize?!
			if (callable(ctor) && value instanceof ctor) return true;
		}
	}
	if (expected === Number) return type(expected, value, safe); // ... should normalize?!
	return callable(expected) && value instanceof expected;
}
