import { NAN, ARGUMENTS, UNDEFINED, NULL, INFINITY } from '../internal/constants.next.js';
import infinity from '../is/infinity.next.js';
import nan from '../is/nan.next.js';
import args from '../is/args/args.next.js';
import stringOf from '../internal/stringOf.next.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
export default function typeOf(value) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	if (infinity(value)) return INFINITY;
	if (nan(value)) return NAN;
	return args(value) ? ARGUMENTS : stringOf(value, true);
}
