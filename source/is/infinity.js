import number from './number.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function infinity(value) {
	return number(value) && (value - 1) === value;
}
