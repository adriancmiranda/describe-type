/*!
 * 
 * ~~~~ describe-type v1.0.0-dev.4
 * 
 * @commit b50e8f97ff3c21361a238cf2f6280cb551cbbb56
 * @moment Saturday, June 2, 2018 3:27 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.describeType = {})));
}(this, (function (exports) { 'use strict';

	// pattern(s)
	var reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	var reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
	var reRegExpFlags = /^(?:([gimuy])(?!.*\1)){0,5}$/;
	var reRegExp = /^\/([\s\S]*)\/((?:([gimuy])(?!.*\3)){0,5})$/;
	var reFunctionName = /\s*function\s+([^(\s]*)\s*/;
	var reIsNativeFn = /\[native\scode\]/;
	var reStringToBoolean = /^true|[1-9]+$/gi;
	var reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
	var reIsHex = /^([A-Fa-f0-9]+|)$/;
	var reIsJsonStart = /^\[|^\{(?!\{)/;
	var reEndsWithBracket = /\]$/;
	var reEndsWithBrace = /\}$/;
	var reIsJsonEnds = { '[': exports.reEndsWithBracket, '{': exports.reEndsWithBrace };

	var patterns_next = /*#__PURE__*/{
		reIsBase64: reIsBase64,
		reIsHexadecimal: reIsHexadecimal,
		reRegExpFlags: reRegExpFlags,
		reRegExp: reRegExp,
		reFunctionName: reFunctionName,
		reIsNativeFn: reIsNativeFn,
		reStringToBoolean: reStringToBoolean,
		reToPropName: reToPropName,
		reIsHex: reIsHex,
		reIsJsonStart: reIsJsonStart,
		reEndsWithBracket: reEndsWithBracket,
		reEndsWithBrace: reEndsWithBrace,
		reIsJsonEnds: reIsJsonEnds
	};

	// prototypes
	var ObjectProto = Object.prototype;
	var ArrayProto = Array.prototype;
	var StringProto = String.prototype;
	var SymbolProto = Symbol.prototype;

	var prototypes_next = /*#__PURE__*/{
		ObjectProto: ObjectProto,
		ArrayProto: ArrayProto,
		StringProto: StringProto,
		SymbolProto: SymbolProto
	};

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = ObjectProto.toString;
	var objectSupportsProto = StringProto === ''.__proto__;
	var symbolToString = SymbolProto ? SymbolProto.toString : undefined;

	var builtIn_next = /*#__PURE__*/{
		objectHasOwnProperty: objectHasOwnProperty,
		objectToString: objectToString,
		objectSupportsProto: objectSupportsProto,
		symbolToString: symbolToString
	};

	var NUMBER = 'number';
	var BOOLEAN = 'boolean';
	var STRING = 'string';
	var SYMBOL = 'symbol';
	var OBJECT = 'object';
	var FUNCTION = 'function';
	var NULL = 'null';
	var UNDEFINED = 'undefined';
	var ARGUMENTS = 'Arguments';
	var INFINITY = 'Infinity';
	var NAN = 'NaN';
	var CONSTRUCTOR = 'constructor';
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
		ARGUMENTS: ARGUMENTS,
		INFINITY: INFINITY,
		NAN: NAN,
		CONSTRUCTOR: CONSTRUCTOR,
		ARGUMENTS_SEAL: ARGUMENTS_SEAL,
		CALLEE: CALLEE
	};

	// environment
	var inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
	var inNode = new Function('try{return this===global;}catch(err){return false;}')();
	var env = exports.inNode ? global : window;

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
	function array(value) {
		return value instanceof Array;
	}

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
	var getPrototypeOf = objectSupportsProto ? function getPrototypeOf(value) {
		return value.__proto__ || ObjectProto;
	} : function getPrototypeOf(value) {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return value.constructor.prototype;
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
		var proto = getPrototypeOf(value) || Object;
		return proto.constructor;
	}

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
	function symbol(value) {
		return typeof value === SYMBOL;
	}

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
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	function ownProperty(context, key) {
		if (context === undefined || context === null) { return false; }
		return objectHasOwnProperty.call(context, key);
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
		if (callable(cmd) === false) { throw new TypeError(("The second argument should be a function, received \"" + (typeof cmd) + "\"")); }
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

	/**
	 *
	 * @param {Array} list - .
	 * @returns {String}
	 */
	function stringifyArray(list) {
		var size = list.length - 1;
		return reduce(list, function (accumulator, item, index) {
			var last = index === size;
			accumulator += last ? ((stringify(item)) + "]") : ((stringify(item)) + ",");
			return accumulator;
		}, '[');
	}

	/**
	 *
	 * @param {Object} hash - .
	 * @returns {String}
	 */
	function stringifyObject(hash) {
		var list = keys(hash);
		var size = list.length - 1;
		return reduce(list, function (accumulator, key, index) {
			var last = index === size;
			var value = stringify(hash[key]);
			var pair = key + ":" + value;
			accumulator += last ? (pair + "}") : (pair + ",");
			return accumulator;
		}, '{');
	}

	/**
	 *
	 * @param {any} value - .
	 * @returns {String}
	 */
	function stringifyValue(value) {
		if (value === undefined) { return UNDEFINED; }
		if (value === null) { return NULL; }
		if (string(value)) { return value; }
		if (symbol(value)) { return symbolToString ? symbolToString.call(value) : ''; }
		if (array(value)) { return stringifyArray(value); }
		if (object(value)) { return stringifyObject(value); }
		var result = String(value);
		return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
	}

	stringifyValue.array = stringifyArray;
	stringifyValue.object = stringifyObject;

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
						range += list.charAt(c);
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
		if (value === undefined === false && value === null === false) {
			var proto = getPrototypeOf(value);
			var ctor = proto.constructor;
			if (ctor && force) {
				if (!ctor.name || ctor.name === 'Object') {
					var matches = ctor.toString().match(reFunctionName);
					return matches ? matches[1] : '';
				}
				return ctor.name;
			}
		}
		return slice(objectToString.call(value), 8, -1);
	}

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
		if (value !== value) { return NAN; }
		if (infinity(value)) { return INFINITY; }
		return args(value) ? ARGUMENTS : stringOf(value, true);
	}

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



	var index_next = /*#__PURE__*/{
		unsafeMethod: unsafeMethod,
		ownProperty: ownProperty,
		ownValue: ownValue,
		own: own,
		at: at
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyArgs(value) {
		return args(value) && value.length === 0;
	}

	args.empty = isEmptyArgs;

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
				if (ctor === Number) { return type(ctor, value); } // ... should normalize?!
				if (callable(ctor) && value instanceof ctor) { return true; }
			}
		}
		if (expected === Number) { return type(expected, value); } // ... should normalize?!
		return callable(expected) && value instanceof expected;
	}

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

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isRegExpFlags(value) {
		if (string(value)) {
			return reRegExpFlags.test(value);
		}
		return false;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isRegExpString(value) {
		if (string(value)) {
			return reRegExp.test(value);
		}
		return false;
	}

	regexp.flags = isRegExpFlags;
	regexp.string = isRegExpString;

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

	function hex(value) {
		return string(value) && reIsHex.test(value);
	}

	function hexadecimal(value) {
		return string(value) && reIsHexadecimal.test(value);
	}

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



	var index_next$1 = /*#__PURE__*/{
		args: args,
		array: array,
		arraylike: arraylike,
		not: notType,
		object: object,
		stream: stream,
		string: string,
		regexp: regexp,
		a: type,
		an: type,
		any: any,
		base64: base64,
		bool: bool,
		buffer: buffer,
		callable: callable,
		date: date,
		decimal: decimal,
		defined: defined,
		element: element,
		empty: empty,
		enumerable: enumerable,
		equal: equal,
		error: error,
		even: even,
		exotic: exotic,
		hex: hex,
		hexadecimal: hexadecimal,
		hosted: hosted,
		infinity: infinity,
		instanceOf: instanceOf,
		int: int,
		jsonlike: jsonlike,
		max: max,
		min: min,
		nan: nan,
		nativeFunction: nativeFunction,
		nil: nil,
		number: number,
		numeric: numeric,
		odd: odd,
		primitive: primitive,
		symbol: symbol,
		type: type,
		uint: uint,
		undef: undef,
		vector: vector,
		within: within
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
		if (proto === null && properties === undefined) { return {}; }
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

	var PR0PERTIES = {
		type: true,
		required: true,
		strict: false,
		'default': false
	};

	function schematize(patterns, settings) {
		var schema = asAny(Object, patterns) || create(null);
		var entity = asAny(Object, settings) || create(null);
		return reduce(keys(schema), function (copy, key) {
			if (startsWith(key, '$')) {
				var slug = key.substring(1);
				var assert = { key: key, data: schema[key] };
				var config = { key: slug, data: entity[slug] };
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
			assert.data['default'] = asAny(assert.data.type, assert.data['default'], config, chunk);
		}
		return assert.data;
	}

	function parseConfig(assert, config) {
		if (object(assert.data['default'])) {
			config.data = schematize(assert.data['default'], config.data);
		}
		if (any(assert.data.type, config.data)) {
			return config.data;
		}
		if ('default' in assert.data || !assert.data.required) {
			return assert.data['default'];
		}
		return undefined;
	}

	/* eslint-disable no-unused-vars */
	var version = { tag: '1.0.0-dev.4', sha1: 'b50e8f97ff3c21361a238cf2f6280cb551cbbb56', type: 'uncompressed' };

	exports.has = index_next;
	exports.is = index_next$1;
	exports.version = version;
	exports.as = asA;
	exports.schema = schematize;
	exports.prototypes = prototypes_next;
	exports.builtIn = builtIn_next;
	exports.patterns = patterns_next;
	exports.constants = constants_next;
	exports.stringify = stringifyValue;
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
	exports.inBrowser = inBrowser;
	exports.inNode = inNode;
	exports.env = env;

})));
