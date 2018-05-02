import arraylike from '../is/arraylike/arraylike.next.js';
import string from '../is/string/string.next.js';
import number from '../is/number.next.js';
import mod from '../internal/mod.next.js';

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
	let size = list === undefined || list === null ? 0 : 0 | list.length;
	if (size) {
		let start = mod(startIndex, 0, size + 1);
		if (number(endIndex)) {
			size = mod(endIndex, 0, size - 1);
		}
		if (start < size) {
			if (string(list)) {
				range = '';
				for (let c = start; c < size; c += 1) {
					range += list[c];
				}
				return range;
			}
			for (let i = size - 1; i > start - 1; i -= 1) {
				range[i - start] = list[i];
			}
		}
	}
	return range;
}
