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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.describetype = global.describetype || {}, global.describetype.as = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
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



	var FUNCTION = env_1.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var callable_1 = callable;
	function callable(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === FUNCTION;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var array_1 = array;
	function array(value) {
	  return value instanceof Array;
	}

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	var STRING = env_1.STRING;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var string_1 = string;
	function string(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) === STRING || value instanceof String;
	}

	var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	var OBJECT = env_1.OBJECT;
	var NUMBER = env_1.NUMBER;





	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var arraylike_1 = arraylike;
	function arraylike(value) {
	  return array_1(value) || string_1(value) || !!value && (typeof value === 'undefined' ? 'undefined' : _typeof$2(value)) === OBJECT && _typeof$2(value.length) === NUMBER && (value.length === 0 || value.length > 0 && value.length - 1 in value);
	}

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {String|Array} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var ownValue_1 = ownValue;
	function ownValue(context, value) {
	  if (arraylike_1(context) === false) { return false; }
	  for (var id = context.length - 1; id > -1; id -= 1) {
	    if (value === context[id]) {
	      return true;
	    }
	  }
	  return false;
	}

	var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	var NUMBER$1 = env_1.NUMBER;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var number_1 = number;
	function number(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof$3(value)) === NUMBER$1 || value instanceof Number;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var int_1 = int;
	function int(value) {
	  return number_1(value) && value === value && value % 1 === 0;
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
	var intOf_1 = intOf;
	function intOf(value, radix) {
	  value = radix === undefined || radix === null ? value : parseInt(value, radix);
	  return int_1(value) ? value : 0 | value;
	}

	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {Number} n - index
	 * @param {Number} a - divident
	 * @param {Number} b - divisor
	 * @returns {Number}
	 */
	var mod_1 = mod;
	function mod(n, a, b) {
		n = intOf_1(n);
		a = intOf_1(a);
		b = intOf_1(b);
		var rem = void 0;
		if (a < 0 || b < 0) {
			var places = b - a;
			rem = (n - a) % (places + 1);
			rem = rem < 0 ? rem + (places + 1) : rem === 0 ? 0 : rem;
			return rem - (places - b);
		}
		if (n === b) { return n; }
		if (n === b + 1) { return a; }
		if (n === a - 1) { return b; }
		rem = n % (b || 1);
		rem = rem < a ? rem + b : rem === 0 ? 0 : rem;
		return rem;
	} /* eslint-disable no-nested-ternary */

	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {arraylike} value
	 * @param {int} startIndex
	 * @param {int} endIndex
	 * @returns {Array}
	 */
	var Array_prototype_slice = slice;
	function slice(list, startIndex, endIndex) {
		var range = [];
		var size = list === undefined || list === null ? 0 : 0 | list.length;
		if (size) {
			var start = mod_1(startIndex, 0, size + 1);
			if (number_1(endIndex)) {
				size = mod_1(endIndex, 0, size - 1);
			}
			if (start < size) {
				if (string_1(list)) {
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
	 * @param {Function} cmd - .
	 * @param {any} context - .
	 * @returns {any}
	 */
	var apply_1 = apply;
	function apply(cmd, context, args, blindly) {
		try {
			var $ = arraylike_1(args) ? args : [];
			switch ($.length) {
				case 0:
					return cmd.call(context);
				case 1:
					return cmd.call(context, $[0]);
				case 2:
					return cmd.call(context, $[0], $[1]);
				case 3:
					return cmd.call(context, $[0], $[1], $[2]);
				case 4:
					return cmd.call(context, $[0], $[1], $[2], $[3]);
				case 5:
					return cmd.call(context, $[0], $[1], $[2], $[3], $[4]);
				case 6:
					return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5]);
				case 7:
					return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6]);
				case 8:
					return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7]);
				case 9:
					return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8]);
				default:
					return cmd.apply(context, $);
			}
		} catch (err) {
			if (blindly) { return err; }
			throw err;
		}
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
	var getExpectedValue_1 = getExpectedValue;
	function getExpectedValue(expected, value, args, startIndex, endIndex) {
	  if (callable_1(value) && (expected === Function || ownValue_1(expected, Function)) === false) {
	    args = Array_prototype_slice(args, startIndex, endIndex);
	    return apply_1(value, args[0], args, true);
	  }
	  return value;
	}

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

	var ObjectProto = prototypes.ObjectProto;



	var objectGetPrototypeOf = builtIn.objectGetPrototypeOf;
	var objectHasOwnProperty = builtIn.objectHasOwnProperty;



	var CONSTRUCTOR = env_1.CONSTRUCTOR;


	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	var constructorOf_1 = constructorOf;
	function constructorOf(value) {
		if (value.constructor === undefined) { return Object; }
		var proto = value.__proto__;

		if (proto === null) { return Object; }

		return proto.constructor || getConstructorOf(value) || function () {
			if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
				return Object;
			}
			return value.constructor.prototype.constructor;
		}();
		function getConstructorOf(value) {
			var proto = objectGetPrototypeOf(value);
			if (proto === null) { return Object; }
			return proto.constructor;
		}
	}

	var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





	var STRING$1 = env_1.STRING;
	var NUMBER$2 = env_1.NUMBER;
	var SYMBOL = env_1.SYMBOL;
	var FUNCTION$1 = env_1.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var type_1 = type;
	function type(expected, value) {
		if (value === undefined || value === null) { return value === expected; }
		if (expected === undefined || expected === null) { return expected === value; }
		if (value === true || value === false) { return expected === Boolean; }
		var type = typeof value === 'undefined' ? 'undefined' : _typeof$4(value);
		if (type === STRING$1) { return expected === String; }
		if (type === NUMBER$2) { return expected === Number; }
		if (type === SYMBOL) { return expected === Symbol; }
		if (expected === Function) { return type === FUNCTION$1; }
		if (value instanceof Array) { return expected === Array; }
		if (value instanceof RegExp) { return expected === RegExp; }
		return constructorOf_1(value) === expected;
	}

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_type = asA;
	function asA(expected, value) {
	  value = getExpectedValue_1(expected, value, arguments, 2);
	  return type_1(expected, value) ? value : arguments[2];
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var any_1 = any;
	function any(expected, value) {
	  if (expected === undefined || expected === null) { return expected === value; }
	  if (expected instanceof Array && expected.length > 0) {
	    for (var i = expected.length - 1; i > -1; i -= 1) {
	      if (type_1(expected[i], value)) { return true; }
	    }
	  }
	  return type_1(expected, value);
	}

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_any = asAny;
	function asAny(expected, value) {
	  value = getExpectedValue_1(expected, value, arguments, 2);
	  return any_1(expected, value) ? value : arguments[2];
	}

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var instanceOf_1 = instanceOf;
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

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_instanceOf = asInstanceOf;
	function asInstanceOf(expected, value) {
	  value = getExpectedValue_1(expected, value, arguments, 2);
	  return instanceOf_1(expected, value) ? value : arguments[2];
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var not_any = notAny;
	function notAny(expected, value) {
	  return any_1(expected, value) === false;
	}

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {arraylike} value
	 * @returns {Boolean}
	 */
	var vector_1 = vector;
	function vector(expected, value) {
	  if (arraylike_1(value) === false) { return false; }
	  for (var i = value.length - 1; i > -1; i -= 1) {
	    if (not_any(expected, value[i])) { return false; }
	  }
	  return true;
	}

	/**
	 *
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var as_vectorOf = asVectorOf;
	function asVectorOf(expected, value) {
		value = getExpectedValue_1(expected, value, arguments, 2);
		if (expected === undefined || expected === null) { return vector_1(expected, value); }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (vector_1(expected[i], value)) { return value; }
			}
			return arguments[2];
		}
		return vector_1(expected, value) ? value : arguments[2];
	}

	as_type.a = as_type.an = as_type.type = as_type;
	as_type.any = as_any;
	as_type.instanceOf = as_instanceOf;
	as_type.vectorOf = as_vectorOf;
	var as = as_type;

	return as;

})));
