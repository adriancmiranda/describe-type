import primitive from './primitive.js';

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
