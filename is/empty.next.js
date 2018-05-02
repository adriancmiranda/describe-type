import arraylikeEmpty from './arraylike/arraylike.empty.next.js';
import objectEmpty from './object/object.empty.next.js';
import callable from './callable.next.js';

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
