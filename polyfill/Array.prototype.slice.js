'use strict';

var arraylike = require('../is/arraylike/arraylike.js');

var string = require('../is/string/string.js');

var number = require('../is/number.js');

var mod = require('../internal/mod.js');

/**
 *
 * @function
 * @memberof utility
 * @param {arraylike} value
 * @param {int} startIndex
 * @param {int} endIndex
 * @returns {Array}
 */
module.exports = slice;
function slice(list, startIndex, endIndex) {
	var range = [];
	var size = list === undefined || list === null ? 0 : 0 | list.length;
	if (size) {
		var start = mod(startIndex, 0, size + 1);
		if (number(endIndex)) {
			size = mod(endIndex, 0, size - 1);
		}
		if (start < size) {
			if (string(list)) {
				range = '';
				for (var c = start; c < size; c += 1) {
					range += list[c];
				}
				return range;
			}
			for (var i = size - 1; i > start - 1; i -= 1) {
				range[i - start] = list[i];
			}
		}
	}
	return range;
}
