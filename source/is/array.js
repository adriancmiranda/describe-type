/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function array(value) {
	if (value == null) return false;
	return value.constructor === Array;
}
