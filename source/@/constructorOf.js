/**
 *
 * @function
 * @memberof of
 * @param {any} value
 * @returns {String}
 */
export default function constructorOf(value) {
	if (value == null) return value;
	return value.constructor || Object;
}
