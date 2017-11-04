/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function number(value) {
	return typeof value === 'number' || value instanceof Number;
}
