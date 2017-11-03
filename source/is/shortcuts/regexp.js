import a from '../common/a.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function regexp(value) {
	return a(RegExp, value);
}
