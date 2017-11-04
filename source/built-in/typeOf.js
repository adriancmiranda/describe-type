import infinity from '../is/infinity.js';
import args from '../is/args.js';
import stringOf from '../built-in/stringOf.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
export default function typeOf(value) {
	if (infinity(value) || value == null || (typeof value === 'number' && isNaN(value))) {
		return String(value);
	}
	return args(value) ? 'Arguments' : stringOf(value, true);
}
