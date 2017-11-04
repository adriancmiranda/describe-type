import arraylike from '../is/arraylike.js';
import string from '../is/string.js';
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
	if (arraylike(list)) {
		const size = list.length;
		let start = mod(startIndex, 0, size);
		const end = mod(endIndex, 0, size) || size;
		if (string(list)) {
			range = '';
			while (start < end) {
				range += list[start];
				start += 1;
			}
			return range;
		}
		while (start < end) {
			range[range.length] = list[start];
			start += 1;
		}
	}
	return range;
}
