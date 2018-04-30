import { env } from '../internal/env.js';
import callable from './callable.js';

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
