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
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
module.exports = constructorOf;
function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	var proto = value.__proto__;

	if (proto === null) return Object;

	return proto.constructor || getConstructorOf(value) || function () {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return Object;
		}
		return value.constructor.prototype.constructor;
	}();
	function getConstructorOf(value) {
		var proto = objectGetPrototypeOf(value);
		if (proto === null) return Object;
		return proto.constructor;
	}
}
