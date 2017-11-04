import toFloat from '../to/toFloat.js';

/**
 *
 * @function
 * @memberof utility
 * @param {Object} context
 * @param {Boolean} getNum
 * @returns {Array}
 */
export default function mod(index, min, max) {
	min = toFloat(min);
	max = toFloat(max);
	index = toFloat(index);
	if ((index + max) == 0) return 0;
	const value = index % max;
	return value < min ? (value + max) : value;
}
