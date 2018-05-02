import string from './string.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isEmptyString(value) {
	return string(value) && value.length === 0;
}
