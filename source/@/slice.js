import uint from '../is/numeric/uint.js';
import arraylike from '../is/iterable/arraylike.js';

/**
 *
 * @function
 * @memberof utility
 * @param {arraylike} value
 * @param {int} startIndex
 * @param {int} endIndex
 * @returns {Array}
 */
export default function slice(value, startIndex, endIndex) {
	if (arraylike(value) === false) return [];
	const args = [];
	const index = uint(startIndex) ? startIndex + 1 : 1;
	const len = value.length - index;
	for (let id = len; id > -1; id -= 1) {
		args[id] = value[(id + index) - 1];
	}
	return args;
}
