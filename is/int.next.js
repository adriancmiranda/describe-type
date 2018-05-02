import number from './number.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function int(value) {
	return number(value) && value === value && value % 1 === 0;
}
