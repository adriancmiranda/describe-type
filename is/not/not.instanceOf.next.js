import instanceOf from '../instanceOf.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notInstanceOf(expected, value) {
	return instanceOf(expected, value) === false;
}
