import { reIsNativeFn } from '../../internal/patterns.next.js';
import fn from './fn.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
export default function nativeFunction(value) {
	return fn(value) && reIsNativeFn.test(value.toString());
}
