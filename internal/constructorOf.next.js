import { CONSTRUCTOR } from './constants.next.js';
import { objectHasOwnProperty } from './built-in.next.js';
import getPrototypeOf from '../polyfill/Object.getPrototypeOf.next.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
export default function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	let proto = value.__proto__;
	if (proto === null) return Object;
	return proto.constructor || (() => {
		proto = getPrototypeOf(proto) || Object;
		return proto.constructor;
	})();
}
