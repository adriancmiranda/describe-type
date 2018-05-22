const arraylike = require('../is/arraylike/arraylike.js');
const string = require('../is/string/string.js');
const number = require('../is/number.js');
const mod = require('../internal/mod.js');

/**
 *
 * @function
 * @memberof utility
 * @param {arraylike} value
 * @param {int} startIndex
 * @param {int} endIndex
 * @returns {Array}
 */
module.exports = function slice(list, startIndex, endIndex) {
	let range = [];
	let size = list === undefined || list === null ? 0 : 0 | list.length;
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
			for (let i = size - 1; i > start - 1; i -= 1) {
				range[i - start] = list[i];
			}
		}
	}
	return range;
}
