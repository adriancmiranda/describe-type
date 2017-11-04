/* eslint-disable no-unused-vars */
import arraylike from '../is/arraylike.js';
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
export default function slice(list, start, end) {
	const range = [];
	if (arraylike(list)) {
		const size = list.length;
		start = mod(start, 0, size);
		end = mod(end, size, size);
		while (start < end) {
			range.push(list[start++]);
		}
	}
	return range;
}
