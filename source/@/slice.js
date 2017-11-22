import arraylike from '../is/arraylike.js';
import string from '../is/string.js';
import number from '../is/number.js';
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
	let size = arraylike(list) && list.length;
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
			for (let i = start; i < size; i += 1) {
				range[range.length] = list[i];
			}
		}
	}
	return range;
}
