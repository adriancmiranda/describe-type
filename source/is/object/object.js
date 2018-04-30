import constructorOf from '../../built-in/constructorOf.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function object(value) {
	if (value === undefined || value === null) return false;
	return constructorOf(value) === Object;
}
