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
	if (value.constructor == null) return false;
	return callable(value.constructor.isBuffer) && value.constructor.isBuffer(value);
}
