import array from './array.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isEmptyArray(value) {
	return array(value) && value.length === 0;
}
