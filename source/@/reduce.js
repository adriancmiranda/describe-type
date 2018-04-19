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
export default function reduce(list, callback, initialValue, context) {
	let size = arraylike(list) && list.length;
	if (size) {
		// TODO
	}
	return initialValue;
}
