import { NAN, NUMBER, ARGUMENTS, UNDEFINED, NULL } from '../internal/env.js';
import infinity from '../is/infinity.js';
import nan from '../is/nan.js';
import args from '../is/args/args.js';
import stringOf from '../built-in/stringOf.js';

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
