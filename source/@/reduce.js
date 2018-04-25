import keys from './keys.js';

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
	if (list == null) return undefined;
	const size = (0 | list.length);
	if (size) {
		let index = 0;
		if (arguments.length === 2) {
			initialValue = list[index];
			index = 1;
		}
		for (index; index < size; index += 1) {
			initialValue = cmd.call(context || null, initialValue, list[index], index, list);
		}
	}
	return initialValue;
}
