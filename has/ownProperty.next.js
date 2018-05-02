import { objectHasOwnProperty } from '../internal/built-in.next.js';

/**
 *
 * @function
 * @memberof has
 * @param {Object|Function} context
 * @param {any} key
 * @returns {Boolean}
 */
export default function ownProperty(context, key) {
	if (context === undefined || context === null) return false;
	return objectHasOwnProperty.call(context, key);
}
