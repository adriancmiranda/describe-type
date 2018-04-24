import arraylike from '../is/arraylike/arraylike.js';
import string from '../is/string/string.js';
import number from '../is/number.js';
import keys from './keys.js';
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
export default function reduce(list, cmd, initialValue, context) {
	let size = arraylike(list) && list.length;
	if (size) {
		for (size; i < size; i += 1) {
			initialValue = cmd.call(context, initialValue, list[key], keys[i], list);
		}
	}
	return initialValue;
}
