import arrayOf from '../array/array.of.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notArrayOf(expected, value) {
	return arrayOf(expected, value) === false;
}
