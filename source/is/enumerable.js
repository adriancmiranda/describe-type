import number from './number.js';
import callable from './callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function enumerable(value) {
	if (value === undefined || value === null) return false;
	return number(value.length) && callable(value) === false;
}
