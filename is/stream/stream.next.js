/* eslint-disable no-underscore-dangle */
import callable from '../callable.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function stream(value) {
	if (value === undefined || value === null) return false;
	if (value._events === undefined || value._events === null) return false;
	return callable(value.pipe);
}
