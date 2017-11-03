/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
export default function error(value) {
	if (value == null) return false;
  return value instanceof Error;
}
