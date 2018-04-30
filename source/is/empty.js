import arraylikeEmpty from './arraylike/arraylike.empty.js';
import objectEmpty from './object/object.empty.js';
import callable from './callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function empty(value) {
	if (value === undefined || value === null) {
		return true;
	}
	if (arraylikeEmpty(value)) {
		return true;
	}
	if (objectEmpty(value)) {
		return true;
	}
	if (callable(value.valueOf)) {
		return !value.valueOf();
	}
	return !value;
}
