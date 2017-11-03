import number from '../shortcuts/number.js';
import infinity from './infinity.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function even(value) {
	return infinity(value) || (number(value) && value === value && value % 2 === 0);
}
