const { CONSTRUCTOR } = require('../internal/constants.js');
const { ObjectProto } = require('../internal/prototypes.js');
const { objectSupportsProto } = require('../internal/env.js');
const { objectHasOwnProperty } = require('../internal/built-in.js');

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
module.exports = objectSupportsProto ? function getPrototypeOf(value) {
	return value.__proto__ || ObjectProto;
} : function getPrototypeOf(value) {
	if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
		return ObjectProto;
	}
	return value.constructor.prototype;
};
