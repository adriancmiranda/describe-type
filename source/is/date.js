/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function date(value) {
	if (value == null) return false;
	return value.constructor === Date;
}
