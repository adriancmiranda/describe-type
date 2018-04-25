import mod from './mod.js';
import as from '../as/as.type.js';

/**
 *
 * @function
 * @memberof utility
 * @param {String} value -
 * @param {String} search -
 * @param {uint} position -
 * @returns {Boolean}
 */
export default function startsWith(value, search, position) {
	const str = as(String, value) || '';
	const startIndex = mod(position, 0, str.length);
	return str.substr(startIndex, search.length) === search;
}
