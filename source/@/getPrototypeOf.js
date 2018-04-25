import create from './create.js';

/**
 *
 * @name Object.getPrototypeOf
 * @function
 * @global
 * @param {value}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
 */
export default function getPrototypeOf(value) {
	if (value == null) {
		throw new TypeError('Uncaught TypeError: Cannot convert undefined or null to object');
	}
	return value.__proto__ || Object.getPrototypeOf(value) || create(null);
}
