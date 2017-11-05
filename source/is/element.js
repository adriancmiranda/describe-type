import { env } from '../@/env.js';
import callable from './callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function element(value) {
	return value != null && (
		callable(env.HTMLElement) &&
		value instanceof env.HTMLElement &&
		value.nodeType === 1
	);
}
