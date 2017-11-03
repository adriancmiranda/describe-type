import any from './any.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function not(expected, value) {
	return any(expected, value) === false;
}
