import { env } from '../internal/env.next.js';
import callable from './callable.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function element(value) {
	if (value === undefined || value === null) return false;
	if (env.window === undefined || env.window === null) return false;
	return callable(env.window.HTMLElement) &&
	value instanceof env.window.HTMLElement &&
	value.nodeType === 1;
}
