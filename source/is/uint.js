import int from './int.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function uint(value) {
	return int(value) && value > 0;
}
