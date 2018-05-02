import vector from '../vector.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notVectorOf(expected, value) {
	return vector(expected, value) === false;
}
