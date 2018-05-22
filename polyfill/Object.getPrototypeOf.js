const { CONSTRUCTOR } = require('../internal/constants.js');
const { ObjectProto } = require('../internal/prototypes.js');
const { objectGetPrototypeOf, objectHasOwnProperty } = require('../internal/built-in.js');

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
module.exports = (value) => {
	const ctor = value.constructor;
	if (ctor === undefined) return ObjectProto;
	return value.__proto__ || objectGetPrototypeOf(value) || (() => {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return ctor.prototype;
	})();
};

if (typeof Object.getPrototypeOf === 'function' === false) {
	Object.getPrototypeOf = ''.__proto__ === String.prototype
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
