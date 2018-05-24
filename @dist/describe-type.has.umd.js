/*!
 * 
 * ~~~~ describe-type v1.0.0
 * 
 * @commit 097bd6cdc9b7ff181443c206103b453ab243b49b
 * @moment Thursday, May 24, 2018 11:15 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.describetype = global.describetype || {}, global.describetype.has = {})));
}(this, (function (exports) { 'use strict';

	var NUMBER = 'number';
	var BOOLEAN = 'boolean';
	var STRING = 'string';
	var SYMBOL = 'symbol';
	var OBJECT = 'object';
	var FUNCTION = 'function';
	var NULL = 'null';
	var UNDEFINED = 'undefined';
	var GENERATOR_FUNCTION = 'GeneratorFunction';
	var ASYNC_FUNCTION = 'AsyncFunction';
	var ARGUMENTS = 'Arguments';
	var INFINITY = 'Infinity';
	var NAN = 'NaN';
	var CONSTRUCTOR = 'constructor';
	var PREFIX_SEAL = '[object ';
	var ARGUMENTS_SEAL = '[object Arguments]';
	var CALLEE = 'callee';

	var constants = {
		NUMBER: NUMBER,
		BOOLEAN: BOOLEAN,
		STRING: STRING,
		SYMBOL: SYMBOL,
		OBJECT: OBJECT,
		FUNCTION: FUNCTION,
		NULL: NULL,
		UNDEFINED: UNDEFINED,
		GENERATOR_FUNCTION: GENERATOR_FUNCTION,
		ASYNC_FUNCTION: ASYNC_FUNCTION,
		ARGUMENTS: ARGUMENTS,
		INFINITY: INFINITY,
		NAN: NAN,
		CONSTRUCTOR: CONSTRUCTOR,
		PREFIX_SEAL: PREFIX_SEAL,
		ARGUMENTS_SEAL: ARGUMENTS_SEAL,
		CALLEE: CALLEE
	};

	var FUNCTION$1 = constants.FUNCTION;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var callable = function callable(value) {
		return typeof value === FUNCTION$1;
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {object} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var unsafeMethod = function unsafeMethod(context, methodName) {
		try {
			return callable(context[methodName]);
		} catch (err) {
			return false;
		}
	};

	// prototypes
	var ObjectProto = Object.prototype;
	var ArrayProto = Array.prototype;
	var StringProto = String.prototype;

	var prototypes = {
		ObjectProto: ObjectProto,
		ArrayProto: ArrayProto,
		StringProto: StringProto
	};

	var ObjectProto$1 = prototypes.ObjectProto;
	var StringProto$1 = prototypes.StringProto;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto$1.hasOwnProperty;
	var objectToString = ObjectProto$1.toString;
	var objectGetPrototypeOf = Object.getPrototypeOf;
	var objectSupportsProto = StringProto$1 === ''.__proto__;

	var builtIn = {
		objectHasOwnProperty: objectHasOwnProperty,
		objectToString: objectToString,
		objectGetPrototypeOf: objectGetPrototypeOf,
		objectSupportsProto: objectSupportsProto
	};

	var objectHasOwnProperty$1 = builtIn.objectHasOwnProperty;

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	var ownProperty = function ownProperty(context, key) {
		if (context === undefined || context === null) { return false; }
		return objectHasOwnProperty$1.call(context, key);
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var array = function array(value) {
		return value instanceof Array;
	};

	var STRING$1 = constants.STRING;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var string = function string(value) {
		return typeof value === STRING$1 || value instanceof String;
	};

	var OBJECT$1 = constants.OBJECT;
	var NUMBER$1 = constants.NUMBER;



	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var arraylike = function arraylike(value) {
		return array(value) || string(value) || (
			(!!value && typeof value === OBJECT$1 && typeof value.length === NUMBER$1) &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		);
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {String|Array} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var ownValue = function ownValue(context, value) {
		if (arraylike(context) === false) { return false; }
		for (var id = context.length - 1; id > -1; id -= 1) {
			if (value === context[id]) {
				return true;
			}
		}
		return false;
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Array|String|Object|Function} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var own = function own(context, value) {
		if (array(context)) { return ownValue(context, value); }
		return ownProperty(context, value);
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	var at = function at(context, key) {
		if (context === undefined || context === null) { return false; }
		return context[key] === undefined === false;
	};

	var unsafeMethod$1 = unsafeMethod;
	var ownProperty$1 = ownProperty;
	var ownValue$1 = ownValue;
	var own$1 = own;
	var at$1 = at;

	var has = {
		unsafeMethod: unsafeMethod$1,
		ownProperty: ownProperty$1,
		ownValue: ownValue$1,
		own: own$1,
		at: at$1
	};

	exports.default = has;
	exports.unsafeMethod = unsafeMethod$1;
	exports.ownProperty = ownProperty$1;
	exports.ownValue = ownValue$1;
	exports.own = own$1;
	exports.at = at$1;

})));
