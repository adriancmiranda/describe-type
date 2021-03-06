import any from '../any.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notAny(expected, value) {
	return any(expected, value) === false;
}
