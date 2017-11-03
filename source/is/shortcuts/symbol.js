import { env } from '../../@/env.js';
import a from '../common/a.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function symbol(value) {
	return a(env.Symbol, value);
}
