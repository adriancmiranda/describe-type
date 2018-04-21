/**
 *
 * @function
 * @memberof has
 * @param {Object|Function} context
 * @param {any} key
 * @returns {Boolean}
 */
export default function at(context, key) {
	if (context == null) return false;
	return context[key] === undefined === false;
}