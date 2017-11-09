import { env } from '../@/env.js';
import an from './an.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function buffer(value) {
	return an(env.Buffer, value);
}
