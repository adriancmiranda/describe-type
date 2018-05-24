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
define(['exports'], function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var patterns = createCommonjsModule(function (module, exports) {
	// pattern(s)
	exports.reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	exports.reFunctionName = /\s*function\s+([^(\s]*)\s*/;
	exports.reIsNativeFn = /\[native\scode\]/;
	exports.reStringToBoolean = /^true|[1-9]+$/gi;
	exports.reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
	exports.reIsHex = /^([A-Fa-f0-9]+|)$/;
	exports.reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
	exports.reIsJsonStart = /^\[|^\{(?!\{)/;
	exports.reEndsWithBracket = /\]$/;
	exports.reEndsWithBrace = /\}$/;
	exports.reIsJsonEnds = { '[': exports.reEndsWithBracket, '{': exports.reEndsWithBrace };
	});
	var patterns_1 = patterns.reIsBase64;
	var patterns_2 = patterns.reFunctionName;
	var patterns_3 = patterns.reIsNativeFn;
	var patterns_4 = patterns.reStringToBoolean;
	var patterns_5 = patterns.reToPropName;
	var patterns_6 = patterns.reIsHex;
	var patterns_7 = patterns.reIsHexadecimal;
	var patterns_8 = patterns.reIsJsonStart;
	var patterns_9 = patterns.reEndsWithBracket;
	var patterns_10 = patterns.reEndsWithBrace;
	var patterns_11 = patterns.reIsJsonEnds;

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
	var INFINITY$1 = 'Infinity';
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
		INFINITY: INFINITY$1,
		NAN: NAN,
		CONSTRUCTOR: CONSTRUCTOR,
		PREFIX_SEAL: PREFIX_SEAL,
		ARGUMENTS_SEAL: ARGUMENTS_SEAL,
		CALLEE: CALLEE
	};

	// environment
	var inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
	var inNode_1 = new Function('try{return this===global;}catch(err){return false;}')();
	var env_1 = inNode ? commonjsGlobal : window;

	var env = {
		inBrowser: inBrowser,
		inNode: inNode_1,
		env: env_1
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

	var NUMBER$2 = constants.NUMBER;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var number = function number(value) {
		return typeof value === NUMBER$2 || value instanceof Number;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var int_1 = function int(value) {
		return number(value) && value === value && value % 1 === 0;
	};

	/**
	 * The `intOf()` function parses a string argument and returns an integer of the
	 * specified radix (the base in mathematical numeral systems).
	 *
	 * @function
	 * @memberof to
	 *
	 * @param {Number|String|Object} value - The value to parse.
	 * If the string argument is not a string, then it is converted to a string
	 * (using the ToString abstract operation).
	 * Leading whitespace in the string argument is ignored.
	 *
	 * @param {any} radix - An integer between 2 and 36 that represents
	 * the radix (the base in mathematical numeral systems) of the above mentioned string.
	 * Specify 10 for the decimal numeral system commonly used by humans. Always specify
	 * this parameter to eliminate reader confusion and to guarantee predictable behavior.
	 * Different implementations produce different results when a radix is not specified,
	 * usually defaulting the value to 10.
	 *
	 * @returns {Number} An integer number parsed from the given string.
	 * If the first character cannot be converted to a number, 0 is returned.
	 *
	 * min: -2147483647
	 * max: 2147483647
	 */
	var intOf = function intOf(value, radix) {
		value = (radix === undefined || radix === null ? value : parseInt(value, radix));
		return int_1(value) ? value : 0 | value;
	};

	/* eslint-disable no-nested-ternary */


	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {Number} n - index
	 * @param {Number} a - divident
	 * @param {Number} b - divisor
	 * @returns {Number}
	 */
	var mod = function mod(n, a, b) {
		n = intOf(n);
		a = intOf(a);
		b = intOf(b);
		var rem;
		if (a < 0 || b < 0) {
			var places = (b - a);
			rem = (n - a) % (places + 1);
			rem = rem < 0 ? (rem + (places + 1)) : rem === 0 ? 0 : rem;
			return rem - (places - b);
		}
		if (n === b) { return n; }
		if (n === b + 1) { return a; }
		if (n === a - 1) { return b; }
		rem = n % (b || 1);
		rem = rem < a ? (rem + b) : rem === 0 ? 0 : rem;
		return rem;
	};

	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {arraylike} value
	 * @param {int} startIndex
	 * @param {int} endIndex
	 * @returns {Array}
	 */
	var Array_prototype_slice = function slice(list, startIndex, endIndex) {
		var range = [];
		var size = list === undefined || list === null ? 0 : 0 | list.length;
		if (size) {
			var start = mod(startIndex, 0, size + 1);
			if (number(endIndex)) {
				size = mod(endIndex, 0, size - 1);
			}
			if (start < size) {
				if (string(list)) {
					range = '';
					for (var c = start; c < size; c += 1) {
						range += list[c];
					}
					return range;
				}
				for (var i = size - 1; i > start - 1; i -= 1) {
					range[i - start] = list[i];
				}
			}
		}
		return range;
	};

	var reFunctionName = patterns.reFunctionName;
	var objectToString$1 = builtIn.objectToString;


	/**
	 *
	 * @function
	 * @memberof to
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var stringOf = function stringOf(value, force) {
		var ctor = value != null && value.constructor;
		if (ctor && force) {
			if (!ctor.name || ctor.name === 'Object') {
				var matches = ctor.toString().match(reFunctionName);
				return matches ? matches[1] : '';
			}
			return ctor.name;
		}
		return Array_prototype_slice(objectToString$1.call(value), 8, -1);
	};

	var reStringToBoolean = patterns.reStringToBoolean;


	/**
	 *
	 * @function
	 * @memberof to
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var booleanOf = function booleanOf(value) {
		if (string(value) && value.length) {
			return reStringToBoolean.test(value);
		}
		return !!value;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var nan = function nan(value) {
		var isnum = number(value);
		return isnum === false || (isnum && value !== value);
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var infinity = function infinity(value) {
		return number(value) && (value - 1) === value;
	};

	/**
	 * The `floatOf()` function parses an argument and returns a floating point number.
	 *
	 * @function
	 * @memberof to
	 *
	 * @param {Number|String|Object} value - The value to parse.
	 * If the string argument is not a string, then it is converted to a string
	 * (using the ToString abstract operation).
	 * Leading whitespace in the string argument is ignored.
	 *
	 * @returns {Number} A floating point number parsed from the given value.
	 * If the first character cannot be converted to a number, 0 is returned.
	 */
	var floatOf = function floatOf(value) {
		value = +value;
		return nan(value) || infinity(value) ? 0 : value;
	};

	/**
	 * The `uintOf()` function parses a string argument and returns an unsigned integer
	 * of the specified radix (the base in mathematical numeral systems).
	 *
	 * @function
	 * @memberof to
	 *
	 * @param {Number|String|Object} value - The value to parse.
	 * If the string argument is not a string, then it is converted to a string
	 * (using the ToString abstract operation).
	 * Leading whitespace in the string argument is ignored.
	 *
	 * @param {any} radix - An unsigned integer between 2 and 36 that represents
	 * the radix (the base in mathematical numeral systems) of the above mentioned string.
	 * Specify 10 for the decimal numeral system commonly used by humans. Always specify
	 * this parameter to eliminate reader confusion and to guarantee predictable behavior.
	 * Different implementations produce different results when a radix is not specified,
	 * usually defaulting the value to 10.
	 *
	 * @returns {Number} An unsigned integer number parsed from the given string.
	 * If the first character cannot be converted to a number, 0 is returned.
	 *
	 * min: 0
	 * max: 0xffffffff
	 */
	var uintOf = function uintOf(value, radix) {
		var num = intOf(value, radix);
		return num < 0 ? 0 : num;
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

	var CONSTRUCTOR$1 = constants.CONSTRUCTOR;
	var objectGetPrototypeOf$1 = builtIn.objectGetPrototypeOf;
	var objectHasOwnProperty$1 = builtIn.objectHasOwnProperty;

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	var constructorOf = function constructorOf(value) {
		if (value.constructor === undefined) { return Object; }
		var proto = value.__proto__;

		if (proto === null) { return Object; }

		return proto.constructor || getConstructorOf(value) || (function () {
			if (objectHasOwnProperty$1.call(value, CONSTRUCTOR$1)) {
				return Object;
			}
			return value.constructor.prototype.constructor;
		})();
		function getConstructorOf(value) {
			var proto = objectGetPrototypeOf$1(value);
			if (proto === null) { return Object; }
			return proto.constructor;
		}
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var object = function object(value) {
		if (value === undefined || value === null) { return false; }
		return constructorOf(value) === Object;
	};

	var CALLEE$1 = constants.CALLEE;
	var ARGUMENTS_SEAL$1 = constants.ARGUMENTS_SEAL;
	var objectToString$2 = builtIn.objectToString;





	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var args = function args(value) {
		return (array(value) === false && arraylike(value) &&
			object(value) && unsafeMethod(value, CALLEE$1)
		) || objectToString$2.call(value) === ARGUMENTS_SEAL$1;
	};

	var NAN$1 = constants.NAN;
	var ARGUMENTS$1 = constants.ARGUMENTS;
	var UNDEFINED$1 = constants.UNDEFINED;
	var NULL$1 = constants.NULL;





	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	var typeOf = function typeOf(value) {
		if (value === undefined) { return UNDEFINED$1; }
		if (value === null) { return NULL$1; }
		if (infinity(value)) { return INFINITY; }
		if (nan(value)) { return NAN$1; }
		return args(value) ? ARGUMENTS$1 : stringOf(value, true);
	};

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	var constructorNameOf = function constructorNameOf(value) {
		var name = typeOf(value);
		return (name === 'Function' && (value != null && value.name)) || name;
	};

	var reToPropName = patterns.reToPropName;





	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @param {Boolean} write
	 * @returns {String}
	 */
	var name = function name(value, write) {
		if (value === undefined || value === null || object(value)) {
			return typeOf(value);
		}
		return value.name || (write &&
			string(value) ? value.replace(reToPropName, '_') : constructorNameOf(value)
		);
	};

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Array}
	 */
	var typify = function typify(expected, write) {
		if (string(expected) === false && arraylike(expected) && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				expected[i] = name(expected[i], write);
			}
			return expected.join('|');
		}
		return name(expected, write);
	};

	/**
	 *
	 * @param {Function} cmd - .
	 * @param {any} context - .
	 * @returns {any}
	 */
	var apply = function apply(cmd, context, args, blindly) {
		try {
			var $ = arraylike(args) ? args : [];
			switch ($.length) {
				case 0: return cmd.call(context);
				case 1: return cmd.call(context, $[0]);
				case 2: return cmd.call(context, $[0], $[1]);
				case 3: return cmd.call(context, $[0], $[1], $[2]);
				case 4: return cmd.call(context, $[0], $[1], $[2], $[3]);
				case 5: return cmd.call(context, $[0], $[1], $[2], $[3], $[4]);
				case 6: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5]);
				case 7: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6]);
				case 8: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7]);
				case 9: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8]);
				default: return cmd.apply(context, $);
			}
		} catch (err) {
			if (blindly) { return err; }
			throw err;
		}
	};

	var objectHasOwnProperty$2 = builtIn.objectHasOwnProperty;

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
		return objectHasOwnProperty$2.call(context, key);
	};

	/**
	 *
	 * @param {Object} value
	 * @param {String} key
	 * @param {Function} cmd
	 * @param {Object} ctx
	 * @param {any} args
	 * @returns {any}
	 */
	var resolveProperty = function resolveProperty(value, key, readStatic, cmd, ctx, args) {
		if (readStatic || (key !== 'prototype' && key !== 'length' && key !== 'name')) {
			var item = value[key];
			return apply(cmd, ctx || item, [item, key, value, args]);
		}
		return undefined;
	};

	/* eslint-disable no-restricted-syntax */




	/**
	 *
	 * @function
	 * @param {any} value
	 * @param {Function} cmd
	 * @param {any} context
	 * @param {Boolean} getInheritedProps
	 * @returns {?}
	 */
	var eachProperty = function eachProperty(value, cmd, context, getInheritedProps) {
		var i = 0;
		var readStatics = callable(value) === false;
		for (var key in value) {
			if (getInheritedProps || ownProperty(value, key)) {
				var response = resolveProperty(value, key, readStatics, cmd, context, i += 1);
				if (response !== undefined) {
					return response;
				}
			}
		}
		return undefined;
	};

	/**
	 *
	 * @function
	 * @param {Array|arraylike} value
	 * @param {Function} cmd
	 * @param {any} context
	 * @returns {?}
	 */
	var eachValue = function eachValue(value, cmd, context, keepReverse) {
		if (value === undefined || value === null) { return undefined; }
		var size = (0 | value.length) - 1;
		for (var index = size; index > -1; index -= 1) {
			var i = keepReverse ? index : size - index;
			var item = value[i];
			var resolve = cmd.call(context || item, item, i, value, i);
			if (resolve === undefined === false) {
				return resolve;
			}
		}
		return undefined;
	};

	/* eslint-disable no-restricted-syntax */




	/**
	 *
	 * @function
	 * @param {any} value
	 * @param {Function} cmd
	 * @param {Object} context
	 * @param {Boolean} keepReverseOrGetInheritedProps
	 * @returns {?}
	 */
	var each = function each(value, cmd, context, keepReverseOrGetInheritedProps) {
		if (arraylike(value)) { return eachValue(value, cmd, context, keepReverseOrGetInheritedProps); }
		return eachProperty(value, cmd, context, keepReverseOrGetInheritedProps);
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
	 * @memberof is
	 * @param {Function} expect -
	 * @param {any} value -
	 * @param {arraylike} args -
	 * @param {int} startIndex -
	 * @param {int} endIndex -
	 * @returns {any}
	 */
	var getExpectedValue = function getExpectedValue(expected, value, args, startIndex, endIndex) {
		if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
			args = Array_prototype_slice(args, startIndex, endIndex);
			return apply(value, args[0], args, true);
		}
		return value;
	};

	var STRING$2 = constants.STRING;
	var NUMBER$4 = constants.NUMBER;
	var SYMBOL$1 = constants.SYMBOL;
	var FUNCTION$2 = constants.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var type = function type(expected, value) {
		if (value === undefined || value === null) { return value === expected; }
		if (expected === undefined || expected === null) { return expected === value; }
		if (value === true || value === false) { return expected === Boolean; }
		var type = typeof value;
		if (type === STRING$2) { return expected === String; }
		if (type === NUMBER$4) { return expected === Number; }
		if (type === SYMBOL$1) { return expected === Symbol; }
		if (expected === Function) { return type === FUNCTION$2; }
		if (value instanceof Array) { return expected === Array; }
		if (value instanceof RegExp) { return expected === RegExp; }
		return constructorOf(value) === expected;
	};

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_type = function asA(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		return type(expected, value) ? value : arguments[2];
	};

	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {String} value -
	 * @param {String} search -
	 * @param {uint} position -
	 * @returns {Boolean}
	 */
	var String_prototype_startsWith = function startsWith(value, search, position) {
		var str = as_type(String, value) || '';
		var startIndex = mod(position, 0, str.length);
		return str.substr(startIndex, search.length) === search;
	};

	// TODO: to implement
	var UNDEFINED$2 = constants.UNDEFINED;
	var NULL$2 = constants.NULL;
	var PREFIX_SEAL$1 = constants.PREFIX_SEAL;




	var stringify = function stringify(value, replacer, space) {
		if (value === undefined) { return UNDEFINED$2; }
		if (value === null) { return NULL$2; }
		var seal = as_type(String, value.toString, value);
		if (String_prototype_startsWith(seal, PREFIX_SEAL$1)) { seal = ''; }
		return seal || JSON.stringify(value, replacer, space);
	};

	var internal = createCommonjsModule(function (module, exports) {
	(function (resource) {
		var this$1 = this;

		for (var name$$1 in resource) {
			if (name$$1 === 'default' === false) {
				this$1[name$$1] = resource[name$$1];
			}
		}
	}).call(exports, env);
	exports.stringOf = stringOf;
	exports.booleanOf = booleanOf;
	exports.floatOf = floatOf;
	exports.intOf = intOf;
	exports.uintOf = uintOf;
	exports.constructorNameOf = constructorNameOf;
	exports.constructorOf = constructorOf;
	exports.typeOf = typeOf;
	exports.typify = typify;
	exports.name = name;
	exports.apply = apply;
	exports.each = each;
	exports.eachValue = eachValue;
	exports.eachProperty = eachProperty;
	exports.resolveProperty = resolveProperty;
	exports.getExpectedValue = getExpectedValue;
	exports.mod = mod;
	exports.stringify = stringify;
	exports.prototypes = prototypes;
	exports.builtIn = builtIn;
	exports.patterns = patterns;
	exports.constants = constants;
	});
	var internal_1 = internal.stringOf;
	var internal_2 = internal.booleanOf;
	var internal_3 = internal.floatOf;
	var internal_4 = internal.intOf;
	var internal_5 = internal.uintOf;
	var internal_6 = internal.constructorNameOf;
	var internal_7 = internal.constructorOf;
	var internal_8 = internal.typeOf;
	var internal_9 = internal.typify;
	var internal_10 = internal.name;
	var internal_11 = internal.apply;
	var internal_12 = internal.each;
	var internal_13 = internal.eachValue;
	var internal_14 = internal.eachProperty;
	var internal_15 = internal.resolveProperty;
	var internal_16 = internal.getExpectedValue;
	var internal_17 = internal.mod;
	var internal_18 = internal.stringify;
	var internal_19 = internal.prototypes;
	var internal_20 = internal.builtIn;
	var internal_21 = internal.patterns;
	var internal_22 = internal.constants;

	exports.default = internal;
	exports.stringOf = internal_1;
	exports.booleanOf = internal_2;
	exports.floatOf = internal_3;
	exports.intOf = internal_4;
	exports.uintOf = internal_5;
	exports.constructorNameOf = internal_6;
	exports.constructorOf = internal_7;
	exports.typeOf = internal_8;
	exports.typify = internal_9;
	exports.name = internal_10;
	exports.apply = internal_11;
	exports.each = internal_12;
	exports.eachValue = internal_13;
	exports.eachProperty = internal_14;
	exports.resolveProperty = internal_15;
	exports.getExpectedValue = internal_16;
	exports.mod = internal_17;
	exports.stringify = internal_18;
	exports.prototypes = internal_19;
	exports.builtIn = internal_20;
	exports.patterns = internal_21;
	exports.constants = internal_22;

});
