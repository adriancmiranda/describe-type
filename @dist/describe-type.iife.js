/*!
 * 
 * ~~~~ describe-type v1.0.0
 * 
 * @commit 1204e947bcd466d7e08675c921d51f6d783b1923
 * @moment Wednesday, May 2, 2018 1:13 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
var describetype = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var patterns = createCommonjsModule(function (module, exports) {

	// pattern(s)
	var reIsBase64 = exports.reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	var reFunctionName = exports.reFunctionName = /\s*function\s+([^(\s]*)\s*/;
	var reIsNativeFn = exports.reIsNativeFn = /\[native\scode\]/;
	var reStringToBoolean = exports.reStringToBoolean = /^true|[1-9]+$/gi;
	var reToPropName = exports.reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
	var reIsHex = exports.reIsHex = /^([A-Fa-f0-9]+|)$/;
	var reIsHexadecimal = exports.reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
	var reIsJsonStart = exports.reIsJsonStart = /^\[|^\{(?!\{)/;
	var reEndsWithBracket = exports.reEndsWithBracket = /\]$/;
	var reEndsWithBrace = exports.reEndsWithBrace = /\}$/;
	var reIsJsonEnds = exports.reIsJsonEnds = { '[': reEndsWithBracket, '{': reEndsWithBrace };
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

	var prototypes = createCommonjsModule(function (module, exports) {

	// prototypes
	var ObjectProto = exports.ObjectProto = Object.prototype;
	var ArrayProto = exports.ArrayProto = Array.prototype;
	var StringProto = exports.StringProto = String.prototype;
	});
	var prototypes_1 = prototypes.ObjectProto;
	var prototypes_2 = prototypes.ArrayProto;
	var prototypes_3 = prototypes.StringProto;

	var builtIn = createCommonjsModule(function (module, exports) {



	var ObjectProto = prototypes.ObjectProto;
	var StringProto = prototypes.StringProto;


	// built-in method(s)
	var objectHasOwnProperty = exports.objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = exports.objectToString = ObjectProto.toString;
	var objectGetPrototypeOf = exports.objectGetPrototypeOf = Object.getPrototypeOf;
	var objectSupportsProto = exports.objectSupportsProto = StringProto === ''.__proto__;
	});
	var builtIn_1 = builtIn.objectHasOwnProperty;
	var builtIn_2 = builtIn.objectToString;
	var builtIn_3 = builtIn.objectGetPrototypeOf;
	var builtIn_4 = builtIn.objectSupportsProto;

	var constants = createCommonjsModule(function (module, exports) {

	var NUMBER = exports.NUMBER = 'number';
	var BOOLEAN = exports.BOOLEAN = 'boolean';
	var STRING = exports.STRING = 'string';
	var SYMBOL = exports.SYMBOL = 'symbol';
	var OBJECT = exports.OBJECT = 'object';
	var FUNCTION = exports.FUNCTION = 'function';
	var NULL = exports.NULL = 'null';
	var UNDEFINED = exports.UNDEFINED = 'undefined';
	var GENERATOR_FUNCTION = exports.GENERATOR_FUNCTION = 'GeneratorFunction';
	var ASYNC_FUNCTION = exports.ASYNC_FUNCTION = 'AsyncFunction';
	var ARGUMENTS = exports.ARGUMENTS = 'Arguments';
	var INFINITY = exports.INFINITY = 'Infinity';
	var NAN = exports.NAN = 'NaN';
	var CONSTRUCTOR = exports.CONSTRUCTOR = 'constructor';
	var PREFIX_SEAL = exports.PREFIX_SEAL = '[object ';
	var ARGUMENTS_SEAL = exports.ARGUMENTS_SEAL = '[object Arguments]';
	var CALLEE = exports.CALLEE = 'callee';
	});
	var constants_1 = constants.NUMBER;
	var constants_2 = constants.BOOLEAN;
	var constants_3 = constants.STRING;
	var constants_4 = constants.SYMBOL;
	var constants_5 = constants.OBJECT;
	var constants_6 = constants.FUNCTION;
	var constants_7 = constants.NULL;
	var constants_8 = constants.UNDEFINED;
	var constants_9 = constants.GENERATOR_FUNCTION;
	var constants_10 = constants.ASYNC_FUNCTION;
	var constants_11 = constants.ARGUMENTS;
	var constants_12 = constants.INFINITY;
	var constants_13 = constants.NAN;
	var constants_14 = constants.CONSTRUCTOR;
	var constants_15 = constants.PREFIX_SEAL;
	var constants_16 = constants.ARGUMENTS_SEAL;
	var constants_17 = constants.CALLEE;

	// environment
	var inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
	var inNode = new Function('try{return this===global;}catch(err){return false;}')();
	var env = inNode ? global : window;

	var env_next = /*#__PURE__*/{
		inBrowser: inBrowser,
		inNode: inNode,
		env: env
	};

	// pattern(s)
	var reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	var reFunctionName = /\s*function\s+([^(\s]*)\s*/;
	var reIsNativeFn = /\[native\scode\]/;
	var reStringToBoolean = /^true|[1-9]+$/gi;
	var reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
	var reIsHex = /^([A-Fa-f0-9]+|)$/;
	var reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
	var reIsJsonStart = /^\[|^\{(?!\{)/;
	var reEndsWithBracket = /\]$/;
	var reEndsWithBrace = /\}$/;
	var reIsJsonEnds = { '[': reEndsWithBracket, '{': reEndsWithBrace };

	var patterns_next = /*#__PURE__*/{
		reIsBase64: reIsBase64,
		reFunctionName: reFunctionName,
		reIsNativeFn: reIsNativeFn,
		reStringToBoolean: reStringToBoolean,
		reToPropName: reToPropName,
		reIsHex: reIsHex,
		reIsHexadecimal: reIsHexadecimal,
		reIsJsonStart: reIsJsonStart,
		reEndsWithBracket: reEndsWithBracket,
		reEndsWithBrace: reEndsWithBrace,
		reIsJsonEnds: reIsJsonEnds
	};

	// prototypes
	var ObjectProto = Object.prototype;
	var ArrayProto = Array.prototype;
	var StringProto = String.prototype;

	var prototypes_next = /*#__PURE__*/{
		ObjectProto: ObjectProto,
		ArrayProto: ArrayProto,
		StringProto: StringProto
	};

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = ObjectProto.toString;
	var objectGetPrototypeOf = Object.getPrototypeOf;
	var objectSupportsProto = StringProto === ''.__proto__;

	var builtIn_next = /*#__PURE__*/{
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

	var constants_next = /*#__PURE__*/{
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

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function array(value) {
		return value instanceof Array;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function string(value) {
		return typeof value === STRING || value instanceof String;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function arraylike(value) {
		return array(value) || string(value) || (
			(!!value && typeof value === OBJECT && typeof value.length === NUMBER) &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		);
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function number(value) {
		return typeof value === NUMBER || value instanceof Number;
	}

	var number_next = /*#__PURE__*/{
		default: number
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function int(value) {
		return number(value) && value === value && value % 1 === 0;
	}

	var int_next = /*#__PURE__*/{
		default: int
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
	function intOf(value, radix) {
		value = (radix === undefined || radix === null ? value : parseInt(value, radix));
		return int(value) ? value : 0 | value;
	}

	var intOf_next = /*#__PURE__*/{
		default: intOf
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
	function mod(n, a, b) {
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
	}

	var mod_next = /*#__PURE__*/{
		default: mod
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
	function slice$1(list, startIndex, endIndex) {
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
	}

	/**
	 *
	 * @function
	 * @memberof to
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function stringOf(value, force) {
		var ctor = value != null && value.constructor;
		if (ctor && force) {
			if (!ctor.name || ctor.name === 'Object') {
				var matches = ctor.toString().match(reFunctionName);
				return matches ? matches[1] : '';
			}
			return ctor.name;
		}
		return slice$1(objectToString.call(value), 8, -1);
	}

	var stringOf_next = /*#__PURE__*/{
		default: stringOf
	};

	/**
	 *
	 * @function
	 * @memberof to
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function booleanOf(value) {
		if (string(value) && value.length) {
			return reStringToBoolean.test(value);
		}
		return !!value;
	}

	var booleanOf_next = /*#__PURE__*/{
		default: booleanOf
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function nan(value) {
		var isnum = number(value);
		return isnum === false || (isnum && value !== value);
	}

	var nan_next = /*#__PURE__*/{
		default: nan
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function infinity(value) {
		return number(value) && (value - 1) === value;
	}

	var infinity_next = /*#__PURE__*/{
		default: infinity
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
	function floatOf(value) {
		value = +value;
		return nan(value) || infinity(value) ? 0 : value;
	}

	var floatOf_next = /*#__PURE__*/{
		default: floatOf
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
	function uintOf(value, radix) {
		var num = intOf(value, radix);
		return num < 0 ? 0 : num;
	}

	var uintOf_next = /*#__PURE__*/{
		default: uintOf
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function callable(value) {
		return typeof value === FUNCTION;
	}

	var callable_next = /*#__PURE__*/{
		default: callable
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {object} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function unsafeMethod(context, methodName) {
		try {
			return callable(context[methodName]);
		} catch (err) {
			return false;
		}
	}

	var unsafeMethod_next = /*#__PURE__*/{
		default: unsafeMethod
	};

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	function constructorOf(value) {
		if (value.constructor === undefined) { return Object; }
		var proto = value.__proto__;

		if (proto === null) { return Object; }

		return proto.constructor || getConstructorOf(value) || (function () {
			if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
				return Object;
			}
			return value.constructor.prototype.constructor;
		})();
		function getConstructorOf(value) {
			var proto = objectGetPrototypeOf(value);
			if (proto === null) { return Object; }
			return proto.constructor;
		}
	}

	var constructorOf_next = /*#__PURE__*/{
		default: constructorOf
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function object(value) {
		if (value === undefined || value === null) { return false; }
		return constructorOf(value) === Object;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function args$1(value) {
		return (array(value) === false && arraylike(value) &&
			object(value) && unsafeMethod(value, CALLEE)
		) || objectToString.call(value) === ARGUMENTS_SEAL;
	}

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	function typeOf(value) {
		if (value === undefined) { return UNDEFINED; }
		if (value === null) { return NULL; }
		if (infinity(value)) { return INFINITY; }
		if (nan(value)) { return NAN; }
		return args$1(value) ? ARGUMENTS : stringOf(value, true);
	}

	var typeOf_next = /*#__PURE__*/{
		default: typeOf
	};

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	function constructorNameOf(value) {
		var name = typeOf(value);
		return (name === 'Function' && (value != null && value.name)) || name;
	}

	var constructorNameOf_next = /*#__PURE__*/{
		default: constructorNameOf
	};

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @param {Boolean} write
	 * @returns {String}
	 */
	function name(value, write) {
		if (value === undefined || value === null || object(value)) {
			return typeOf(value);
		}
		return value.name || (write &&
			string(value) ? value.replace(reToPropName, '_') : constructorNameOf(value)
		);
	}

	var name_next = /*#__PURE__*/{
		default: name
	};

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Array}
	 */
	function typify(expected, write) {
		if (string(expected) === false && arraylike(expected) && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				expected[i] = name(expected[i], write);
			}
			return expected.join('|');
		}
		return name(expected, write);
	}

	var typify_next = /*#__PURE__*/{
		default: typify
	};

	/**
	 *
	 * @param {Function} cmd - .
	 * @param {any} context - .
	 * @returns {any}
	 */
	function apply(cmd, context, args, blindly) {
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
	}

	var apply_next = /*#__PURE__*/{
		default: apply
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	function ownProperty(context, key) {
		if (context === undefined || context === null) { return false; }
		return objectHasOwnProperty.call(context, key);
	}

	var ownProperty_next = /*#__PURE__*/{
		default: ownProperty
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
	function resolveProperty(value, key, readStatic, cmd, ctx, args) {
		if (readStatic || (key !== 'prototype' && key !== 'length' && key !== 'name')) {
			var item = value[key];
			return apply(cmd, ctx || item, [item, key, value, args]);
		}
		return undefined;
	}

	var resolveProperty_next = /*#__PURE__*/{
		default: resolveProperty
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
	function eachProperty(value, cmd, context, getInheritedProps) {
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
	}

	var eachProperty_next = /*#__PURE__*/{
		default: eachProperty
	};

	/**
	 *
	 * @function
	 * @param {Array|arraylike} value
	 * @param {Function} cmd
	 * @param {any} context
	 * @returns {?}
	 */
	function eachValue(value, cmd, context, keepReverse) {
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
	}

	var eachValue_next = /*#__PURE__*/{
		default: eachValue
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
	function each(value, cmd, context, keepReverseOrGetInheritedProps) {
		if (arraylike(value)) { return eachValue(value, cmd, context, keepReverseOrGetInheritedProps); }
		return eachProperty(value, cmd, context, keepReverseOrGetInheritedProps);
	}

	var each_next = /*#__PURE__*/{
		default: each
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {String|Array} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function ownValue(context, value) {
		if (arraylike(context) === false) { return false; }
		for (var id = context.length - 1; id > -1; id -= 1) {
			if (value === context[id]) {
				return true;
			}
		}
		return false;
	}

	var ownValue_next = /*#__PURE__*/{
		default: ownValue
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
	function getExpectedValue(expected, value, args, startIndex, endIndex) {
		if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
			args = slice$1(args, startIndex, endIndex);
			return apply(value, args[0], args, true);
		}
		return value;
	}

	var getExpectedValue_next = /*#__PURE__*/{
		default: getExpectedValue
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function type(expected, value) {
		if (value === undefined || value === null) { return value === expected; }
		if (expected === undefined || expected === null) { return expected === value; }
		if (value === true || value === false) { return expected === Boolean; }
		var type = typeof value;
		if (type === STRING) { return expected === String; }
		if (type === NUMBER) { return expected === Number; }
		if (type === SYMBOL) { return expected === Symbol; }
		if (expected === Function) { return type === FUNCTION; }
		if (value instanceof Array) { return expected === Array; }
		if (value instanceof RegExp) { return expected === RegExp; }
		return constructorOf(value) === expected;
	}

	var type_next = /*#__PURE__*/{
		default: type
	};

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function asA(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		return type(expected, value) ? value : arguments[2];
	}

	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {String} value -
	 * @param {String} search -
	 * @param {uint} position -
	 * @returns {Boolean}
	 */
	function startsWith(value, search, position) {
		var str = asA(String, value) || '';
		var startIndex = mod(position, 0, str.length);
		return str.substr(startIndex, search.length) === search;
	}

	// TODO: to implement

	function stringify(value, replacer, space) {
		if (value === undefined) { return UNDEFINED; }
		if (value === null) { return NULL; }
		var seal = asA(String, value.toString, value);
		if (startsWith(seal, PREFIX_SEAL)) { seal = ''; }
		return seal || JSON.stringify(value, replacer, space);
	}

	var stringify_next = /*#__PURE__*/{
		default: stringify
	};

	var _stringOfNextJs = ( stringOf_next && stringOf ) || stringOf_next;

	var _booleanOfNextJs = ( booleanOf_next && booleanOf ) || booleanOf_next;

	var _floatOfNextJs = ( floatOf_next && floatOf ) || floatOf_next;

	var _intOfNextJs = ( intOf_next && intOf ) || intOf_next;

	var _uintOfNextJs = ( uintOf_next && uintOf ) || uintOf_next;

	var _constructorNameOfNextJs = ( constructorNameOf_next && constructorNameOf ) || constructorNameOf_next;

	var _constructorOfNextJs = ( constructorOf_next && constructorOf ) || constructorOf_next;

	var _typeOfNextJs = ( typeOf_next && typeOf ) || typeOf_next;

	var _typifyNextJs = ( typify_next && typify ) || typify_next;

	var _nameNextJs = ( name_next && name ) || name_next;

	var _applyNextJs = ( apply_next && apply ) || apply_next;

	var _eachNextJs = ( each_next && each ) || each_next;

	var _eachValueNextJs = ( eachValue_next && eachValue ) || eachValue_next;

	var _eachPropertyNextJs = ( eachProperty_next && eachProperty ) || eachProperty_next;

	var _resolvePropertyNextJs = ( resolveProperty_next && resolveProperty ) || resolveProperty_next;

	var _getExpectedValueNextJs = ( getExpectedValue_next && getExpectedValue ) || getExpectedValue_next;

	var _modNextJs = ( mod_next && mod ) || mod_next;

	var _stringifyNextJs = ( stringify_next && stringify ) || stringify_next;

	var internal = createCommonjsModule(function (module, exports) {



	var patterns$$1 = patterns;



	var prototypes$$1 = prototypes;



	var builtIn$$1 = builtIn;







































	for (var _envNextJs_key in env_next) {
	  if (_envNextJs_key !== "default") {
	    exports[_envNextJs_key] = env_next[_envNextJs_key];
	  }
	}

	exports.stringOf = _stringOfNextJs;
	exports.booleanOf = _booleanOfNextJs;
	exports.floatOf = _floatOfNextJs;
	exports.intOf = _intOfNextJs;
	exports.uintOf = _uintOfNextJs;
	exports.constructorNameOf = _constructorNameOfNextJs;
	exports.constructorOf = _constructorOfNextJs;
	exports.typeOf = _typeOfNextJs;
	exports.typify = _typifyNextJs;
	exports.name = _nameNextJs;
	exports.apply = _applyNextJs;
	exports.each = _eachNextJs;
	exports.eachValue = _eachValueNextJs;
	exports.eachProperty = _eachPropertyNextJs;
	exports.resolveProperty = _resolvePropertyNextJs;
	exports.getExpectedValue = _getExpectedValueNextJs;
	exports.mod = _modNextJs;
	exports.stringify = _stringifyNextJs;
	exports.prototypes = prototypes$$1;
	exports.builtIn = builtIn$$1;
	exports.patterns = patterns$$1;
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

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Array|String|Object|Function} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function own(context, value) {
		if (array(context)) { return ownValue(context, value); }
		return ownProperty(context, value);
	}

	var own_next = /*#__PURE__*/{
		default: own
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	function at(context, key) {
		if (context === undefined || context === null) { return false; }
		return context[key] === undefined === false;
	}

	var at_next = /*#__PURE__*/{
		default: at
	};

	var _unsafeMethodNextJs = ( unsafeMethod_next && unsafeMethod ) || unsafeMethod_next;

	var _ownPropertyNextJs = ( ownProperty_next && ownProperty ) || ownProperty_next;

	var _ownValueNextJs = ( ownValue_next && ownValue ) || ownValue_next;

	var _ownNextJs = ( own_next && own ) || own_next;

	var _atNextJs = ( at_next && at ) || at_next;

	var unsafeMethod$1 = _unsafeMethodNextJs;
	var ownProperty$1 = _ownPropertyNextJs;
	var ownValue$1 = _ownValueNextJs;
	var own$1 = _ownNextJs;
	var at$1 = _atNextJs;

	var has = {
		unsafeMethod: unsafeMethod$1,
		ownProperty: ownProperty$1,
		ownValue: ownValue$1,
		own: own$1,
		at: at$1
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyArgs(value) {
		return args$1(value) && value.length === 0;
	}

	args$1.empty = isEmptyArgs;

	var index_next = /*#__PURE__*/{
		default: args$1
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyArray(value) {
		return array(value) && value.length === 0;
	}

	array.empty = isEmptyArray;

	var index_next$1 = /*#__PURE__*/{
		default: array
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyArraylike(value) {
		return arraylike(value) && value.length === 0;
	}

	arraylike.empty = isEmptyArraylike;

	var index_next$2 = /*#__PURE__*/{
		default: arraylike
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function notType(expected, value) {
		return type(expected, value) === false;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function any(expected, value) {
		if (expected === undefined || expected === null) { return expected === value; }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (type(expected[i], value)) { return true; }
			}
		}
		return type(expected, value);
	}

	var any_next = /*#__PURE__*/{
		default: any
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function notAny(expected, value) {
		return any(expected, value) === false;
	}

	var env_1 = createCommonjsModule(function (module, exports) {

	// environment
	var inBrowser = exports.inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
	var inNode = exports.inNode = new Function('try{return this===global;}catch(err){return false;}')();
	var env = exports.env = inNode ? commonjsGlobal : window;
	});
	var env_2 = env_1.inBrowser;
	var env_3 = env_1.inNode;
	var env_4 = env_1.env;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	var FUNCTION$1 = env_1.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var callable_1 = callable$1;
	function callable$1(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === FUNCTION$1;
	}

	var ObjectProto$1 = prototypes.ObjectProto;



	var objectGetPrototypeOf$1 = builtIn.objectGetPrototypeOf;
	var objectHasOwnProperty$1 = builtIn.objectHasOwnProperty;



	var CONSTRUCTOR$1 = env_1.CONSTRUCTOR;


	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	var constructorOf_1 = constructorOf$1;
	function constructorOf$1(value) {
		if (value.constructor === undefined) { return Object; }
		var proto = value.__proto__;

		if (proto === null) { return Object; }

		return proto.constructor || getConstructorOf(value) || function () {
			if (objectHasOwnProperty$1.call(value, CONSTRUCTOR$1)) {
				return Object;
			}
			return value.constructor.prototype.constructor;
		}();
		function getConstructorOf(value) {
			var proto = objectGetPrototypeOf$1(value);
			if (proto === null) { return Object; }
			return proto.constructor;
		}
	}

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





	var STRING$1 = env_1.STRING;
	var NUMBER$1 = env_1.NUMBER;
	var SYMBOL$1 = env_1.SYMBOL;
	var FUNCTION$2 = env_1.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var type_1 = type$1;
	function type$1(expected, value) {
		if (value === undefined || value === null) { return value === expected; }
		if (expected === undefined || expected === null) { return expected === value; }
		if (value === true || value === false) { return expected === Boolean; }
		var type = typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
		if (type === STRING$1) { return expected === String; }
		if (type === NUMBER$1) { return expected === Number; }
		if (type === SYMBOL$1) { return expected === Symbol; }
		if (expected === Function) { return type === FUNCTION$2; }
		if (value instanceof Array) { return expected === Array; }
		if (value instanceof RegExp) { return expected === RegExp; }
		return constructorOf_1(value) === expected;
	}

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function instanceOf(expected, value) {
		if (expected === undefined || expected === null) { return expected === value; }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				var ctor = expected[i];
				if (ctor === Number) { return type_1(ctor, value); } // ... should normalize?!
				if (callable_1(ctor) && value instanceof ctor) { return true; }
			}
		}
		if (expected === Number) { return type_1(expected, value); } // ... should normalize?!
		return callable_1(expected) && value instanceof expected;
	}

	var instanceOf_next = /*#__PURE__*/{
		default: instanceOf
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function notInstanceOf(expected, value) {
		return instanceOf(expected, value) === false;
	}

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {arraylike} value
	 * @returns {Boolean}
	 */
	function vector(expected, value) {
		if (arraylike(value) === false) { return false; }
		for (var i = value.length - 1; i > -1; i -= 1) {
			if (notAny(expected, value[i])) { return false; }
		}
		return true;
	}

	var vector_next = /*#__PURE__*/{
		default: vector
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function notVectorOf(expected, value) {
		return vector(expected, value) === false;
	}

	notType.a = notType.an = notType.type = notType;
	notType.any = notAny;
	notType.instanceOf = notInstanceOf;
	notType.vectorOf = notVectorOf;

	var index_next$3 = /*#__PURE__*/{
		default: notType
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyObject(value) {
		if (object(value) === false) { return false; }
		for (var key in value) {
			if (objectHasOwnProperty.call(value, key)) {
				return false;
			}
		}
		return true;
	}

	object.empty = isEmptyObject;

	var index_next$4 = /*#__PURE__*/{
		default: object
	};

	/* eslint-disable no-underscore-dangle */

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function stream(value) {
		if (value === undefined || value === null) { return false; }
		if (value._events === undefined || value._events === null) { return false; }
		return callable(value.pipe);
	}

	/* eslint-disable no-underscore-dangle */

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isStreamWritable(value) {
		return stream(value) &&
		value.writable !== false &&
		value._writableState != null &&
		callable(value._write);
	}

	/* eslint-disable no-underscore-dangle */

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isStreamReadable(value) {
		return stream(value) &&
		value.readable !== false &&
		value._readableState != null &&
		callable(value._read);
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isStreamDuplex(value) {
		return isStreamWritable(value) && isStreamReadable(value);
	}

	/* eslint-disable no-underscore-dangle */

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isStreamTransform(value) {
		return isStreamDuplex(value) &&
		value._transformState != null &&
		callable(value._transform);
	}

	stream.writable = isStreamWritable;
	stream.readable = isStreamReadable;
	stream.duplex = isStreamDuplex;
	stream.transform = isStreamTransform;

	var index_next$5 = /*#__PURE__*/{
		default: stream
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyString(value) {
		return string(value) && value.length === 0;
	}

	string.empty = isEmptyString;

	var index_next$6 = /*#__PURE__*/{
		default: string
	};



	var a_next = /*#__PURE__*/{
		default: type
	};



	var an_next = /*#__PURE__*/{
		default: type
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function base64(value) {
		return string(value) && reIsBase64.test(value);
	}

	var base64_next = /*#__PURE__*/{
		default: base64
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function bool(value) {
		return value === true || value === false || value instanceof Boolean;
	}

	var bool_next = /*#__PURE__*/{
		default: bool
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function buffer(value) {
		if (value === undefined || value === null) { return false; }
		if (callable(env.Buffer) === false) { return false; }
		var isBuffer = value instanceof env.Buffer && callable(value.constructor.isBuffer);
		return isBuffer && value.constructor.isBuffer(value);
	}

	var buffer_next = /*#__PURE__*/{
		default: buffer
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function date(value) {
		return value instanceof Date;
	}

	var date_next = /*#__PURE__*/{
		default: date
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function decimal(value) {
		return number(value) && value === value && infinity(value) === false && value % 1 !== 0;
	}

	var decimal_next = /*#__PURE__*/{
		default: decimal
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	function undef(value) {
		return value === undefined;
	}

	var undef_next = /*#__PURE__*/{
		default: undef
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	function defined(value) {
		return undef(value) === false;
	}

	var defined_next = /*#__PURE__*/{
		default: defined
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function element(value) {
		if (value === undefined || value === null) { return false; }
		if (env.window === undefined || env.window === null) { return false; }
		return callable(env.window.HTMLElement) &&
		value instanceof env.window.HTMLElement &&
		value.nodeType === 1;
	}

	var element_next = /*#__PURE__*/{
		default: element
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function empty(value) {
		if (value === undefined || value === null) {
			return true;
		}
		if (isEmptyArraylike(value)) {
			return true;
		}
		if (isEmptyObject(value)) {
			return true;
		}
		if (callable(value.valueOf)) {
			return !value.valueOf();
		}
		return !value;
	}

	var empty_next = /*#__PURE__*/{
		default: empty
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function enumerable(value) {
		if (value === undefined || value === null) { return false; }
		return number(value.length) && callable(value) === false;
	}

	var enumerable_next = /*#__PURE__*/{
		default: enumerable
	};

	/**
	 * The Object.is() method determines whether two values are the same value.
	 * @function
	 * @param {Object} valueA - The first value to compare.
	 * @param {Object} valueB - The second value to compare.
	 * @returns {Boolean} The Object.is() method determines whether two values are
	 * the same value.
	 */
	var is = Object.is || function is(valueA, valueB) {
		if (valueA === valueB) {
			if (valueA === 0) { return 1 / valueA === 1 / valueB; }
			return true;
		}
		var a = valueA;
		var b = valueB;
		return valueA !== a && valueB !== b;
	}

	/* eslint-disable no-restricted-syntax */

	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {Object} keys -
	 * @param {Boolean} getInheritedProps -
	 * @returns {Array}
	 */
	function keys(object, getInheritedProps) {
		if (object === undefined || object === null) { return []; }
		if (Object.keys && !getInheritedProps) {
			return Object.keys(object);
		}
		var properties = [];
		for (var key in object) {
			if (getInheritedProps || ownProperty(object, key)) {
				properties[properties.length] = key;
			}
		}
		return properties;
	}

	/**
	 * The equal() method determines whether two values are the same value.
	 * @function
	 * @memberof is
	 * @param {any} valueA - The first value to compare.
	 * @param {any} valueB - The second value to compare.
	 * @returns {Boolean} A Boolean indicating whether or not the two arguments are
	 * the same value.
	 */
	function equal(valueA, valueB) {
		var size;
		if (valueA === undefined || valueA === null) {
			return is(valueA, valueB);
		} else if (valueB === undefined || valueB === null) {
			return is(valueB, valueA);
		} else if (is(valueA, valueB)) {
			return true;
		}
		var constructorA = constructorOf(valueA);
		var constructorB = constructorOf(valueB);
		if (constructorA === constructorB === false) {
			return false;
		} else if (constructorA === Object) {
			var keysA = keys(valueA);
			var keysB = keys(valueB);
			size = keysA.length;
			if (size === keysB.length === false) {
				return false;
			}
			for (size -= 1; size > -1; size -= 1) {
				var key = keysA[size];
				if (equal(valueA[key], valueB[key]) === false) {
					return false;
				}
			}
			return true;
		} else if (constructorA === Array) {
			size = valueA.length;
			if (size === valueB.length === false) {
				return false;
			}
			for (size -= 1; size > -1; size -= 1) {
				if (equal(valueA[size], valueB[size]) === false) {
					return false;
				}
			}
			return true;
		} else if (constructorA === Function) {
			return valueA.prototype === valueB.prototype;
		} else if (constructorA === Date) {
			return valueA.getTime() === valueB.getTime();
		} else if (constructorA === RegExp) {
			return valueA.source === valueB.source && valueA.flags === valueB.flags;
		}
		return false;
	}

	var equal_next = /*#__PURE__*/{
		default: equal
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	function error(value) {
		return value instanceof Error;
	}

	var error_next = /*#__PURE__*/{
		default: error
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function even(value) {
		return infinity(value) || (number(value) && value === value && value % 2 === 0);
	}

	var even_next = /*#__PURE__*/{
		default: even
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function primitive(value) {
		if (value === undefined || value === null) { return true; }
		if (callable(value.valueOf)) { value = value.valueOf(); }
		if (callable(value) || typeof value === OBJECT) {
			return false;
		}
		return true;
	}

	var primitive_next = /*#__PURE__*/{
		default: primitive
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	function exotic(value) {
		return primitive(value) === false;
	}

	var exotic_next = /*#__PURE__*/{
		default: exotic
	};

	function hex(value) {
		return string(value) && reIsHex.test(value);
	}

	var hex_next = /*#__PURE__*/{
		default: hex
	};

	function hexadecimal(value) {
		return string(value) && reIsHexadecimal.test(value);
	}

	var hexadecimal_next = /*#__PURE__*/{
		default: hexadecimal
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {String|Number} key
	 * @param {Object|Array|Function} host
	 * @returns {Boolean}
	 */
	function hosted(key, host) {
		return (host === undefined || host === null || primitive(host[key]) === false) === true;
	}

	var hosted_next = /*#__PURE__*/{
		default: hosted
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function jsonlike(value) {
		if (string(value)) {
			var start = value.match(reIsJsonStart);
			return !!(start && reIsJsonEnds[start[0]].test(value));
		}
		return false;
	}

	var jsonlike_next = /*#__PURE__*/{
		default: jsonlike
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Number} value
	 * @param {arraylike} others
	 * @returns {Boolean}
	 */
	function max(value, others) {
		if (value !== value) {
			throw new TypeError('NaN is not a valid value');
		} else if (arraylike(others) === false) {
			throw new TypeError('Second argument must be array-like');
		} else if (others.length === 0) {
			return false;
		}
		for (var i = others.length - 1; i > -1; i -= 1) {
			if (value < others[i]) {
				return false;
			}
		}
		return true;
	}

	var max_next = /*#__PURE__*/{
		default: max
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Number} value
	 * @param {arraylike} others
	 * @returns {Boolean}
	 */
	function min(value, others) {
		if (value !== value) {
			throw new TypeError('NaN is not a valid value');
		} else if (arraylike(others) === false) {
			throw new TypeError('Second argument must be array-like');
		} else if (others.length === 0) {
			return false;
		}
		for (var i = others.length - 1; i > -1; i -= 1) {
			if (value > others[i]) {
				return false;
			}
		}
		return true;
	}

	var min_next = /*#__PURE__*/{
		default: min
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	function nativeFunction(value) {
		return callable(value) && reIsNativeFn.test(value.toString());
	}

	var nativeFunction_next = /*#__PURE__*/{
		default: nativeFunction
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	function nil(value) {
		return value === null;
	}

	var nil_next = /*#__PURE__*/{
		default: nil
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function numeric(value) {
		if (value === undefined || value === null) { return false; }
		if (bool(value)) { return true; }
		try {
			var test = parseFloat(value);
			return (nan(test) || infinity(test) || arraylike(test)) === false;
		} catch (err) {
			return false;
		}
	}

	var numeric_next = /*#__PURE__*/{
		default: numeric
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function odd(value) {
		return infinity(value) || (number(value) && value === value && value % 2 !== 0);
	}

	var odd_next = /*#__PURE__*/{
		default: odd
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function regexp(value) {
		return value instanceof RegExp;
	}

	var regexp_next = /*#__PURE__*/{
		default: regexp
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function symbol(value) {
		return typeof value === SYMBOL;
	}

	var symbol_next = /*#__PURE__*/{
		default: symbol
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function uint(value) {
		return int(value) && value >= 0;
	}

	var uint_next = /*#__PURE__*/{
		default: uint
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Number} value
	 * @param {Number} start
	 * @param {Number} finish
	 * @returns {Boolean}
	 */
	function within(value, start, finish) {
		value = floatOf(value);
		start = floatOf(start);
		finish = floatOf(finish);
		return infinity(value) || infinity(start) || infinity(finish) ||
			(value >= start && value <= finish)
		;
	}

	var within_next = /*#__PURE__*/{
		default: within
	};

	var _argsIndexNextJs = ( index_next && args$1 ) || index_next;

	var _arrayIndexNextJs = ( index_next$1 && array ) || index_next$1;

	var _arraylikeIndexNextJs = ( index_next$2 && arraylike ) || index_next$2;

	var _notIndexNextJs = ( index_next$3 && notType ) || index_next$3;

	var _objectIndexNextJs = ( index_next$4 && object ) || index_next$4;

	var _streamIndexNextJs = ( index_next$5 && stream ) || index_next$5;

	var _stringIndexNextJs = ( index_next$6 && string ) || index_next$6;

	var _aNextJs = ( a_next && type ) || a_next;

	var _anNextJs = ( an_next && type ) || an_next;

	var _anyNextJs = ( any_next && any ) || any_next;

	var _base64NextJs = ( base64_next && base64 ) || base64_next;

	var _boolNextJs = ( bool_next && bool ) || bool_next;

	var _bufferNextJs = ( buffer_next && buffer ) || buffer_next;

	var _callableNextJs = ( callable_next && callable ) || callable_next;

	var _dateNextJs = ( date_next && date ) || date_next;

	var _decimalNextJs = ( decimal_next && decimal ) || decimal_next;

	var _definedNextJs = ( defined_next && defined ) || defined_next;

	var _elementNextJs = ( element_next && element ) || element_next;

	var _emptyNextJs = ( empty_next && empty ) || empty_next;

	var _enumerableNextJs = ( enumerable_next && enumerable ) || enumerable_next;

	var _equalNextJs = ( equal_next && equal ) || equal_next;

	var _errorNextJs = ( error_next && error ) || error_next;

	var _evenNextJs = ( even_next && even ) || even_next;

	var _exoticNextJs = ( exotic_next && exotic ) || exotic_next;

	var _hexNextJs = ( hex_next && hex ) || hex_next;

	var _hexadecimalNextJs = ( hexadecimal_next && hexadecimal ) || hexadecimal_next;

	var _hostedNextJs = ( hosted_next && hosted ) || hosted_next;

	var _infinityNextJs = ( infinity_next && infinity ) || infinity_next;

	var _instanceOfNextJs = ( instanceOf_next && instanceOf ) || instanceOf_next;

	var _intNextJs = ( int_next && int ) || int_next;

	var _jsonlikeNextJs = ( jsonlike_next && jsonlike ) || jsonlike_next;

	var _maxNextJs = ( max_next && max ) || max_next;

	var _minNextJs = ( min_next && min ) || min_next;

	var _nanNextJs = ( nan_next && nan ) || nan_next;

	var _nativeFunctionNextJs = ( nativeFunction_next && nativeFunction ) || nativeFunction_next;

	var _nilNextJs = ( nil_next && nil ) || nil_next;

	var _numberNextJs = ( number_next && number ) || number_next;

	var _numericNextJs = ( numeric_next && numeric ) || numeric_next;

	var _oddNextJs = ( odd_next && odd ) || odd_next;

	var _primitiveNextJs = ( primitive_next && primitive ) || primitive_next;

	var _regexpNextJs = ( regexp_next && regexp ) || regexp_next;

	var _symbolNextJs = ( symbol_next && symbol ) || symbol_next;

	var _typeNextJs = ( type_next && type ) || type_next;

	var _uintNextJs = ( uint_next && uint ) || uint_next;

	var _undefNextJs = ( undef_next && undef ) || undef_next;

	var _vectorNextJs = ( vector_next && vector ) || vector_next;

	var _withinNextJs = ( within_next && within ) || within_next;

	var args$2 = _argsIndexNextJs;
	var array$1 = _arrayIndexNextJs;
	var arraylike$1 = _arraylikeIndexNextJs;
	var not = _notIndexNextJs;
	var object$1 = _objectIndexNextJs;
	var stream$1 = _streamIndexNextJs;
	var string$1 = _stringIndexNextJs;
	var a = _aNextJs;
	var an = _anNextJs;
	var any$1 = _anyNextJs;
	var base64$1 = _base64NextJs;
	var bool$1 = _boolNextJs;
	var buffer$1 = _bufferNextJs;
	var callable$2 = _callableNextJs;
	var date$1 = _dateNextJs;
	var decimal$1 = _decimalNextJs;
	var defined$1 = _definedNextJs;
	var element$1 = _elementNextJs;
	var empty$1 = _emptyNextJs;
	var enumerable$1 = _enumerableNextJs;
	var equal$1 = _equalNextJs;
	var error$1 = _errorNextJs;
	var even$1 = _evenNextJs;
	var exotic$1 = _exoticNextJs;
	var hex$1 = _hexNextJs;
	var hexadecimal$1 = _hexadecimalNextJs;
	var hosted$1 = _hostedNextJs;
	var infinity$1 = _infinityNextJs;
	var instanceOf$1 = _instanceOfNextJs;
	var int_1 = _intNextJs;
	var jsonlike$1 = _jsonlikeNextJs;
	var max$1 = _maxNextJs;
	var min$1 = _minNextJs;
	var nan$1 = _nanNextJs;
	var nativeFunction$1 = _nativeFunctionNextJs;
	var nil$1 = _nilNextJs;
	var number$1 = _numberNextJs;
	var numeric$1 = _numericNextJs;
	var odd$1 = _oddNextJs;
	var primitive$1 = _primitiveNextJs;
	var regexp$1 = _regexpNextJs;
	var symbol$1 = _symbolNextJs;
	var type$2 = _typeNextJs;
	var uint$1 = _uintNextJs;
	var undef$1 = _undefNextJs;
	var vector$1 = _vectorNextJs;
	var within$1 = _withinNextJs;

	var is$1 = {
		args: args$2,
		array: array$1,
		arraylike: arraylike$1,
		not: not,
		object: object$1,
		stream: stream$1,
		string: string$1,
		a: a,
		an: an,
		any: any$1,
		base64: base64$1,
		bool: bool$1,
		buffer: buffer$1,
		callable: callable$2,
		date: date$1,
		decimal: decimal$1,
		defined: defined$1,
		element: element$1,
		empty: empty$1,
		enumerable: enumerable$1,
		equal: equal$1,
		error: error$1,
		even: even$1,
		exotic: exotic$1,
		hex: hex$1,
		hexadecimal: hexadecimal$1,
		hosted: hosted$1,
		infinity: infinity$1,
		instanceOf: instanceOf$1,
		int: int_1,
		jsonlike: jsonlike$1,
		max: max$1,
		min: min$1,
		nan: nan$1,
		nativeFunction: nativeFunction$1,
		nil: nil$1,
		number: number$1,
		numeric: numeric$1,
		odd: odd$1,
		primitive: primitive$1,
		regexp: regexp$1,
		symbol: symbol$1,
		type: type$2,
		uint: uint$1,
		undef: undef$1,
		vector: vector$1,
		within: within$1
	};



	var index_next$7 = /*#__PURE__*/{
		prototypes: prototypes_next,
		builtIn: builtIn_next,
		patterns: patterns_next,
		constants: constants_next,
		stringOf: stringOf,
		booleanOf: booleanOf,
		floatOf: floatOf,
		intOf: intOf,
		uintOf: uintOf,
		constructorNameOf: constructorNameOf,
		constructorOf: constructorOf,
		typeOf: typeOf,
		typify: typify,
		name: name,
		apply: apply,
		each: each,
		eachValue: eachValue,
		eachProperty: eachProperty,
		resolveProperty: resolveProperty,
		getExpectedValue: getExpectedValue,
		mod: mod,
		stringify: stringify,
		inBrowser: inBrowser,
		inNode: inNode,
		env: env
	};

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function asAny(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		return any(expected, value) ? value : arguments[2];
	}

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function asInstanceOf(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		return instanceOf(expected, value) ? value : arguments[2];
	}

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function asVectorOf(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		if (expected === undefined || expected === null) { return vector(expected, value); }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (vector(expected[i], value)) { return value; }
			}
			return arguments[2];
		}
		return vector(expected, value) ? value : arguments[2];
	}

	asA.a = asA.an = asA.type = asA;
	asA.any = asAny;
	asA.instanceOf = asInstanceOf;
	asA.vectorOf = asVectorOf;

	var index_next$8 = /*#__PURE__*/{
		default: asA
	};

	/**
	 *
	 * @function
	 * @param {Object} proto - The object which should be the prototype of the newly-created object.
	 * @param {Object} properties - Optional. If specified and not undefined, an object whose
	 * enumerable own properties (that is, those properties defined upon itself and not enumerable
	 * properties along its prototype chain) specify property descriptors to be added to the
	 * newly-created object, with the corresponding property names. These properties correspond to
	 * the second argument of `Object.defineProperties()`.
	 * @returns {Object}
	 */
	var create = Object.create || function create(proto, properties) {
		if (proto === null) { return {}; }
		if (notType(Object, proto)) {
			throw new TypeError('Object prototype may only be an Object or null: ' + (typeof proto));
		}
		var Instance = function () {};
		Instance.prototype = proto;
		proto = new Instance();
		each(properties, function (value, property) {
			proto[property] = value.value;
		});
		return proto;
	}

	/**
	 * The reduce() method applies a function against an accumulator and each
	 * element in the array (from left to right) to reduce it to a single value.
	 * @function
	 * @memberof utility
	 * @param {arraylike} list - list of elements.
	 * @param {Function} cmd - Function to execute on each element in the array,
	 * taking four arguments:
	 *  - accumulator: The accumulator accumulates the callback's return values;
	 *    it is the accumulated value previously returned in the last invocation
	 *    of the callback, or initialValue, if supplied (see below).
	 *  - currentIndex?: The index of the current element being processed in the array.
	 *    Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
	 *  - array?: The array reduce() was called upon.
	 * @param {any} initialValue - Value to use as the first argument to the first
	 * call of the callback. If no initial value is supplied, the first element
	 * in the array will be used. Calling reduce() on an empty array without an
	 * initial value is an error.
	 * @param {any} context - Value to use as this when executing callback.
	 * @returns {any} The value that results from the reduction.
	 */
	function reduce(list, cmd, initialValue, context) {
		if (list === undefined || list === null) { return undefined; }
		if (callable(cmd) === false) { throw new TypeError; }
		var size = (0 | list.length);
		if (size) {
			var index = 0;
			if (arguments.length === 2) {
				initialValue = list[index];
				index = 1;
			}
			for (index; index < size; index += 1) {
				initialValue = cmd.call(context || null, initialValue, list[index], index, list);
			}
		}
		return initialValue;
	}

	var STRING$2 = env_1.STRING;

	var OBJECT$1 = env_1.OBJECT;
	var NUMBER$2 = env_1.NUMBER;

	var NUMBER$3 = env_1.NUMBER;

	var UNDEFINED$1 = env_1.UNDEFINED;
	var NULL$1 = env_1.NULL;
	var PREFIX_SEAL$1 = env_1.PREFIX_SEAL;

	var PR0PERTIES = {
		type: true,
		required: true,
		strict: false,
		default: false,
	};

	function schematize(patterns, settings) {
		var schema = asAny(Object, patterns) || create(null);
		var object$$1 = asAny(Object, settings) || create(null);
		return reduce(keys(schema), function (copy, key) {
			if (startsWith(key, '$')) {
				var slug = key.substring(1);
				var assert = { key: key, data: schema[key] };
				var config = { key: slug, data: object$$1[slug] };
				var result = parseProperty(assert, config, copy);
				copy[result.key] = result.data;
			}
			return copy;
		}, create(null));
	}

	function parseProperty(assert, config, chunk) {
		assert.data = parseAssert(assert, config, chunk);
		config.data = parseConfig(assert, config);
		return config;
	}

	function parseAssert(assert, config, chunk) {
		if (any([String, Function, Array, null, undefined], assert.data)) {
			return { type: assert.data, required: PR0PERTIES.required };
		}
		if ('default' in assert.data) {
			assert.data.default = asAny(assert.data.type, assert.data.default, config, chunk);
		}
		return assert.data;
	}

	function parseConfig(assert, config) {
		if (object(assert.data.default)) {
			config.data = schematize(assert.data.default, config.data);
		}
		if (any(assert.data.type, config.data)) {
			return config.data;
		}
		if ('default' in assert.data || !assert.data.required) {
			return assert.data.default;
		}
		return undefined;
	}

	var index_next$9 = /*#__PURE__*/{
		default: schematize
	};

	var _asIndexNextJs = ( index_next$8 && asA ) || index_next$8;

	var _schemaIndexNextJs = ( index_next$9 && schematize ) || index_next$9;

	var describeType = createCommonjsModule(function (module, exports) {



	var has$$1 = has;



	var is = is$1;







	for (var _internalIndexNextJs_key in index_next$7) {
	  if (_internalIndexNextJs_key !== "default") {
	    exports[_internalIndexNextJs_key] = index_next$7[_internalIndexNextJs_key];
	  }
	} /* eslint-disable no-unused-vars */


	exports.has = has$$1;
	exports.is = is;
	exports.as = _asIndexNextJs;
	exports.schema = _schemaIndexNextJs;
	});
	var describeType_1 = describeType.has;
	var describeType_2 = describeType.is;
	var describeType_3 = describeType.as;
	var describeType_4 = describeType.schema;

	exports.default = describeType;
	exports.has = describeType_1;
	exports.is = describeType_2;
	exports.as = describeType_3;
	exports.schema = describeType_4;

	return exports;

}({}));
