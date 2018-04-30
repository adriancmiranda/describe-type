import { ObjectProto } from '../internal/prototypes.js';
import { objectGetPrototypeOf, objectHasOwnProperty } from '../internal/built-in.js';
import { CONSTRUCTOR } from '../internal/env.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
export default function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	const proto = value.__proto__;

	if (proto === null) return Object;
	
	return proto.constructor || getConstructorOf(value) || (() => {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return Object;
		}
		return value.constructor.prototype.constructor;
	})();
	function getConstructorOf(value) {
		const proto = objectGetPrototypeOf(value);
		if (proto === null) return Object;
		return proto.constructor;
	}
}
