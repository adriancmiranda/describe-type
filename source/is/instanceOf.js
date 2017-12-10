import a from './a.js';
import an from './a.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function instanceOf(expected, value) {
	if (expected == null) return expected === value;
	if (expected.constructor === Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			const ctor = expected[i];
			if (ctor === Number) return a(ctor, value);
			if (typeof ctor === 'function' && value instanceof ctor) return true;
		}
	}
	if (expected === Number) return an(expected, value);
	return typeof expected === 'function' && value instanceof expected;
}
