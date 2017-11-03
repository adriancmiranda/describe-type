import infinity from '../is/numeric/infinity.js';
import args from '../is/iterable/args.js';
import nan from '../is/numeric/nan.js';
import toString from '../to/toString.js';

/**
 *
 * @function
 * @memberof of
 * @param {any} value
 * @returns {String}
 */
export default function typeOf(value) {
	if (value == null || infinity(value) || nan(value)) {
		return String(value);
	}
	return args(value) ? 'Arguments' : toString(value, true);
}
