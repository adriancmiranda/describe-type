import { reIsNativeFn } from '../../@/patterns.js';
import callable from './callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
export default function nativeFunction(value) {
	return callable(value) && reIsNativeFn.test(value.toString());
}
