const mod = require('../internal/mod.js');
const asType = require('../as/as.type.js');

/**
 *
 * @function
 * @memberof utility
 * @param {String} value -
 * @param {String} search -
 * @param {uint} position -
 * @returns {Boolean}
 */
module.exports = function startsWith(value, search, position) {
	const str = asType(String, value) || '';
	const startIndex = mod(position, 0, str.length);
	return str.substr(startIndex, search.length) === search;
}
