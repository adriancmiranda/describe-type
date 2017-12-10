/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function regexp(value) {
	if (value == null) return false;
	return value.constructor === RegExp;
}
