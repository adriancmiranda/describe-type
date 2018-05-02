import { env } from '../internal/env.next.js';
import callable from './callable.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function buffer(value) {
	if (value === undefined || value === null) return false;
	if (callable(env.Buffer) === false) return false;
	const isBuffer = value instanceof env.Buffer && callable(value.constructor.isBuffer);
	return isBuffer && value.constructor.isBuffer(value);
}
