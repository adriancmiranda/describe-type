import { CONSTRUCTOR } from '../internal/constants.next.js';
import { ObjectProto } from '../internal/prototypes.next.js';
import { objectGetPrototypeOf, objectHasOwnProperty } from '../internal/built-in.next.js';

/**
 *
 * @name Object.getPrototypeOf
 * @function
 * @global
 * @param {value}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
 */
export default (value) => {
	const ctor = value.constructor;
	if (ctor === undefined) return ObjectProto;
	return value.__proto__ || objectGetPrototypeOf(value) || (() => {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return ctor.prototype;
	})();
};
