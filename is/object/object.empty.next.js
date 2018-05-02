import { objectHasOwnProperty } from '../../internal/built-in.next.js';
import object from './object.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isEmptyObject(value) {
	if (object(value) === false) return false;
	for (const key in value) {
		if (objectHasOwnProperty.call(value, key)) {
			return false;
		}
	}
	return true;
}
