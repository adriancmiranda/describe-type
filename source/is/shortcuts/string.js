/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function string(value) {
	return typeof value === 'string' || value instanceof String;
}
