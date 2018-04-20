/* eslint-disable no-underscore-dangle */
import callable from '../callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function stream(value) {
	if (value == null || value._events == null) return false;
	return callable(value.pipe);
}
