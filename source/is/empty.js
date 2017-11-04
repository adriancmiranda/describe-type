import keys from '../@/keys.js';
import arraylike from './arraylike.js';
import callable from './callable.js';
import object from './object.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function empty(value) {
	if (arraylike(value)) {
		return value.length === 0;
	}
	if (object(value)) {
		return keys(value).length === 0;
	}
	if (value && typeof value === 'object' && callable(value.valueOf)) {
		return !value.valueOf();
	}
	return !value;
}