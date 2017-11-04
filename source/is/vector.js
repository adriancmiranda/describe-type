import not from './not.js';
import arraylike from './arraylike.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {arraylike} value
 * @returns {Boolean}
 */
export default function vector(expected, value) {
	if (arraylike(value) === false) return false;
	for (let i = value.length - 1; i > -1; i -= 1) {
		if (not(expected, value[i])) return false;
	}
	return true;
}
