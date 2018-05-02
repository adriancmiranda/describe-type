import number from './number.next.js';
import infinity from './infinity.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function odd(value) {
	return infinity(value) || (number(value) && value === value && value % 2 !== 0);
}
