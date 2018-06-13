import notAny from '../not/not.any.next.js';
import arraylike from '../arraylike/arraylike.next.js';

/**
 * TODO: a,an,any
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {arraylike} value
 * @returns {Boolean}
 */
export default function arrayOf(expected, value) {
	if (arraylike(value) === false) return false;
	for (let i = value.length - 1; i > -1; i -= 1) {
		if (notAny(expected, value[i])) return false;
	}
	return true;
}
