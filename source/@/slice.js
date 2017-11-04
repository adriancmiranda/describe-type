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
		start = mod(start, 0, size) - 1;
		end = mod(end, size, size) - 1;
		for (let i = end; i > start; i -= 1) {
			range.push(list[i]);
		}
	}
	return range;
}
