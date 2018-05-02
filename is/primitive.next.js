import { OBJECT } from '../internal/constants.next.js';
import callable from './callable.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function primitive(value) {
	if (value === undefined || value === null) return true;
	if (callable(value.valueOf)) value = value.valueOf();
	if (callable(value) || typeof value === OBJECT) {
		return false;
	}
	return true;
}
