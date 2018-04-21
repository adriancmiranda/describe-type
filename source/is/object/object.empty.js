import keys from '../../@/keys.js';
import object from './object.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isEmptyObject(value) {
	return object(value) && keys(value).length === 0;
}
