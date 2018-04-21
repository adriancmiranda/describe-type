import type from './type.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function object(value) {
	return type(Object, value);
}
