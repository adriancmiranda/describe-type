import fn from './fn.next.js';
import caste from './fn.caste.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function callable(value) {
	return fn(value) && caste(value) === false;
}
