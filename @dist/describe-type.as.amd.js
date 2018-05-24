/*!
 * 
 * ~~~~ describe-type v1.0.0
 * 
 * @commit 6f38201294cf88e450d95b4394288fe1a217b8cb
 * @moment Thursday, May 24, 2018 5:03 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
define(function () { 'use strict';

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

	var STRING$2 = constants.STRING;
	var NUMBER$3 = constants.NUMBER;
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
		if (type === NUMBER$3) { return expected === Number; }
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
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var any = function any(expected, value) {
		if (expected === undefined || expected === null) { return expected === value; }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (type(expected[i], value)) { return true; }
			}
		}
		return type(expected, value);
	};

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_any = function asAny(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		return any(expected, value) ? value : arguments[2];
	};

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var instanceOf = function instanceOf(expected, value) {
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
	};

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_instanceOf = function asInstanceOf(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		return instanceOf(expected, value) ? value : arguments[2];
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var not_any = function notAny(expected, value) {
		return any(expected, value) === false;
	};

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {arraylike} value
	 * @returns {Boolean}
	 */
	var vector = function vector(expected, value) {
		if (arraylike(value) === false) { return false; }
		for (var i = value.length - 1; i > -1; i -= 1) {
			if (not_any(expected, value[i])) { return false; }
		}
		return true;
	};

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_vectorOf = function asVectorOf(expected, value) {
		value = getExpectedValue(expected, value, arguments, 2);
		if (expected === undefined || expected === null) { return vector(expected, value); }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (vector(expected[i], value)) { return value; }
			}
			return arguments[2];
		}
		return vector(expected, value) ? value : arguments[2];
	};

	as_type.a = as_type.an = as_type.type = as_type;
	as_type.any = as_any;
	as_type.instanceOf = as_instanceOf;
	as_type.vectorOf = as_vectorOf;
	var as = as_type;

	return as;

});
