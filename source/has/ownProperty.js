import { objectHasOwnProperty } from '../@/built-in.js';

/**
 *
 * @function
 * @memberof has
 * @param {Object|Function} context
 * @param {any} key
 * @returns {Boolean}
 */
export default function ownProperty(context, key) {
	if (context == null) return false;
	return objectHasOwnProperty.call(context, key);
}
