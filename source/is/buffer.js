import { env } from '../@/env.js';
import callable from './callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function buffer(value) {
	if (value == null) return false;
	const isBuffer = value.constructor === env.Buffer && callable(value.constructor.isBuffer);
	return isBuffer && value.constructor.isBuffer(value);
}
