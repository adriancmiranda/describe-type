/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function bool(value) {
	return value === true || value === false || value instanceof Boolean;
}
