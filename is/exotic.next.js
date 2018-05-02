import primitive from './primitive.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
export default function exotic(value) {
	return primitive(value) === false;
}
