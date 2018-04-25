import instanceOf from '../instanceOf.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notInstanceOf(expected, value, safe) {
	return instanceOf(expected, value, safe) === false;
}
