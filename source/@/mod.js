import intOf from '../built-in/intOf.js';

/**
 *
 * @function
 * @memberof utility
 * @param {Object} context
 * @param {Boolean} getNum
 * @returns {Array}
 */
export default function mod(index, min, max) {
	min = intOf(min);
	max = intOf(max) || min || 1;
	index = intOf(index);
	const value = index % max;
	return value < min ? (value + max) : value;
}
