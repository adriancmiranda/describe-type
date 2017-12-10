/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function object(value) {
	if (value == null) return false;
	if (value.constructor === Object) return true;
	return value.constructor === undefined;
}
