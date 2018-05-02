import { reIsNativeFn } from '../internal/patterns.next.js';
import callable from './callable.next.js';

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
