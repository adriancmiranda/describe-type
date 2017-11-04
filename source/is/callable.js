import a from './a.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function callable(value) {
	return a(Function, value);
}
