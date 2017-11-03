import number from '../shortcuts/number.js';

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
