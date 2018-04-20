import a from '../a.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
export default function notA(expected, value) {
	return a(expected, value) === false;
}
