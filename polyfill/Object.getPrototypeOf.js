'use strict';

var _internalPrototypesJs = require('../internal/prototypes.js');

var ObjectProto = _internalPrototypesJs.ObjectProto;

var _internalBuiltInJs = require('../internal/built-in.js');

var objectGetPrototypeOf = _internalBuiltInJs.objectGetPrototypeOf;
var objectHasOwnProperty = _internalBuiltInJs.objectHasOwnProperty;

var _internalEnvJs = require('../internal/env.js');

var CONSTRUCTOR = _internalEnvJs.CONSTRUCTOR;

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
module.exports = function (value) {
	var ctor = value.constructor;
	if (ctor === undefined) return ObjectProto;
	return value.__proto__ || objectGetPrototypeOf(value) || function () {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return ctor.prototype;
	}();
};

if (typeof Object.getPrototypeOf === 'function' === false) {
	Object.getPrototypeOf = ''.__proto__ === String.prototype ? function getPrototypeOf(value) {
		return value.__proto__;
	} : function getPrototypeOf(value) {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return value.constructor.prototype;
	};
}
