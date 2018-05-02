import number from './number.next.js';
import infinity from './infinity.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function decimal(value) {
	return number(value) && value === value && infinity(value) === false && value % 1 !== 0;
}
