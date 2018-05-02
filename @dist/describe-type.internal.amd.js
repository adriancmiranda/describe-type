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
define(['exports'], function (exports) { 'use strict';

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
	var reFunctionName = /\s*function\s+([^(\s]*)\s*/;
	var reStringToBoolean = /^true|[1-9]+$/gi;
	var reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

	// prototypes
	var ObjectProto = Object.prototype;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = ObjectProto.toString;
	var objectGetPrototypeOf = Object.getPrototypeOf;

	var NUMBER = 'number';
	var STRING = 'string';
	var SYMBOL = 'symbol';
	var OBJECT = 'object';
	var FUNCTION = 'function';
	var NULL = 'null';
	var UNDEFINED = 'undefined';
	var ARGUMENTS = 'Arguments';
	var NAN = 'NaN';
	var CONSTRUCTOR = 'constructor';
	var PREFIX_SEAL = '[object ';
	var ARGUMENTS_SEAL = '[object Arguments]';
	var CALLEE = 'callee';

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
	function slice(list, startIndex, endIndex) {
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
		return slice(objectToString.call(value), 8, -1);
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
	function args(value) {
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
		return args(value) ? ARGUMENTS : stringOf(value, true);
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
			args = slice(args, startIndex, endIndex);
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

});
