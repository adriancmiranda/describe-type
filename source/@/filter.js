import arraylike from '../is/arraylike.js';
import apply from './apply.js';

/**
 *
 * @function
 * @memberof utility
 * @param {arraylike} value
 * @param {int} startIndex
 * @param {int} endIndex
 * @returns {Array}
 */
export default function filter(list, callback, context) {
	let range = [];
	let size = arraylike(list) && list.length;
	if (size) {
		// TODO
	}
	return range;
}
