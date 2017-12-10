/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function object(value) {
	if (value == null) return false;
	return value.constructor === Object;
}
