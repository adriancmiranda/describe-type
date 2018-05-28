import { CONSTRUCTOR } from '../internal/constants.next.js';
import { ObjectProto } from '../internal/prototypes.next.js';
import { objectSupportsProto, objectHasOwnProperty } from '../internal/built-in.next.js';

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
let objectGetPrototypeOf = Object.getPrototypeOf;
if (typeof objectGetPrototypeOf === 'function' === false) {
	objectGetPrototypeOf = objectSupportsProto
	? function getPrototypeOf(value) {
			return value.__proto__;
		}
	: function getPrototypeOf(value) {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return value.constructor.prototype;
	};
}
export default objectGetPrototypeOf;
