import { CONSTRUCTOR } from './constants.next.js';
import { objectHasOwnProperty } from './built-in.next.js';
import getPrototypeOf from '../shim/Object.getPrototypeOf.next.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
export default function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	const proto = getPrototypeOf(value) || Object;
	return proto.constructor;
}
