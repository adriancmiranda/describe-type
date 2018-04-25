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
		callable(env.window.HTMLElement) &&
		value instanceof env.window.HTMLElement &&
		value.nodeType === 1
	);
}
