import a from '../common/a.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function date(value) {
	return a(Date, value);
}
