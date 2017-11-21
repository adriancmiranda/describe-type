/*!
 * 
 * ~~~~ describe-type v0.4.4
 * 
 * @commit 8b7cf79bcde78401d39936eb7ac37a998df8d89e
 * @moment Tuesday, November 21, 2017 2:35 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2020 Adrian C. Miranda
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.type = global.type || {}, global.type.builtIn = {})));
}(this, (function (exports) { 'use strict';

	// pattern(s)

	var reFunctionName = /\s*function\s+([^(\s]*)\s*/;

	var reStringToBoolean = /^true|[1-9]+$/gi;
	var reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

	// prototypes
	var ObjectProto = Object.prototype;

	// built-in method(s)

	var objectToString = ObjectProto.toString;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function a(expected, value) {
		if (expected == null || value == null) { return value === expected; }
		if (value.constructor === expected) { return true; }
		if (value.constructor === undefined) { return expected === Object; }
		return expected === Function && (
			value.constructor.name === 'GeneratorFunction' ||
			value.constructor.name === 'AsyncFunction'
		);
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function array(value) {
		return a(Array, value);
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function string(value) {
		return typeof value === 'string' || value instanceof String;
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
			(!!value && typeof value === 'object' && typeof value.length === 'number') &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		);
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
		return 0 | parseInt(value, radix);
	}

	/**
	 * The remainder operator % gives the remainder of the division of two numbers.
	 *
	 * Note:
	 * The remainder operator is sometimes incorrectly referred to as the "modulus"
	 * operator. It is very similar to modulus, but does not work properly with
	 * negative numbers.
	 *
	 * @param {Number} a - Any integer number
	 * @param {Number} b - The modulus of division
	 * @returns {Number}
	 */

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
		var rem$$1;
		if (a < 0 || b < 0) {
			var places = (b - a);
			rem$$1 = (n - a) % places;
			rem$$1 = rem$$1 < (a + 1) ? (rem$$1 + places) : rem$$1 === 0 ? 0 : rem$$1 - 1;
			return rem$$1 - (places - b);
		}
		rem$$1 = n % (b || 1);
		return rem$$1 < a ? (rem$$1 + b) : rem$$1 === 0 ? 0 : rem$$1;
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
		var size = arraylike(list) && list.length - 1;
		if (size > -1) {
			var start = mod(startIndex, 0, size);
			if (undef(endIndex) === false) {
				size = mod(endIndex, 0, size);
			}
			if (string(list)) {
	      range = '';
	      while (size > start) {
	        range += list[start];
	        start -= 1;
	      }
	      return range;
			}
			while (size > start) {
				range[size - start] = list[size];
				size -= 1;
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

	/**
	 *
	 * @function
	 * @memberof to
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function booleanOf(value) {
		if (string(value)) {
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
	function number(value) {
		return typeof value === 'number' || value instanceof Number;
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
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function callable(value) {
		return a(Function, value);
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
	function object(value) {
		return a(Object, value);
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function args(value) {
		return (!array(value) && arraylike(value) &&
			object(value) && unsafeMethod(value, 'callee')
		) || objectToString.call(value) === '[object Arguments]';
	}

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	function typeOf(value) {
		if (infinity(value) || value == null || (typeof value === 'number' && isNaN(value))) {
			return String(value);
		}
		return args(value) ? 'Arguments' : stringOf(value, true);
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
	 * @returns {String}
	 */
	function constructorOf(value) {
		if (value == null) { return value; }
		return value.constructor || Object;
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
		if (value == null || object(value)) {
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

})));
