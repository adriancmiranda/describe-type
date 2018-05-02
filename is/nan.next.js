import number from './number.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function nan(value) {
	const isnum = number(value);
	return isnum === false || (isnum && value !== value);
}
