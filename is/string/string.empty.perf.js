import string from './string';

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
