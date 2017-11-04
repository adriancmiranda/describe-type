import infinity from '../is/infinity.js';
import args from '../is/args.js';
import nan from '../is/nan.js';
import toString from '../to/toString.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
export default function typeOf(value) {
	if (value == null || infinity(value) || nan(value)) {
		return String(value);
	}
	return args(value) ? 'Arguments' : toString(value, true);
}
