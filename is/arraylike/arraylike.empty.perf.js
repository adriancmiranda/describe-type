import arraylike from './arraylike';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isEmptyArraylike(value) {
	return arraylike(value) && value.length === 0;
}
