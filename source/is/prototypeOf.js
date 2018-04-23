import ObjectProto from '../@/prototypes.js';
import getPrototypeOf from '../@/getPrototypeOf.js';

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
export default ObjectProto.isPrototypeOf || function isPrototypeOf(expected, value) {
	if (expected == null || value == null) return false;
	const proto = getPrototypeOf(value);
	return proto === expected.prototype || proto === null;
}
