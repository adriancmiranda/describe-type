import arraylike from '../is/arraylike.js';
import string from '../is/string.js';
import undef from '../is/undef.js';
import mod from './mod.js';

/**
 *
 * @function
 * @memberof utility
 * @param {arraylike} value
 * @param {int} startIndex
 * @param {int} endIndex
 * @returns {Array}
 */
export default function slice(list, startIndex, endIndex) {
	let range = [];
	let size = arraylike(list) && list.length - 1;
	if (size > -1) {
		let start = mod(startIndex, 0, size);
		if (undef(endIndex) === false) {
			size = mod(endIndex, 0, size);
		}
		if (string(list)) {
			range = '';
			while (size > start) {
				range += list[start];
				start -= 1;
			}
			return range;
		}
		while (size > start) {
			range[size - start] = list[size];
			size -= 1;
		}
	}
	return range;
}
