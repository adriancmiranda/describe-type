/*!
 * 
 * ~~~~ describe-type v0.6.5
 * 
 * @commit 31cfede09340c44895116f0579793d7f2717f012
 * @moment Tuesday, April 3, 2018 6:02 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021 Adrian C. Miranda
 */
'use strict';

// pattern(s)
var reFunctionName = /\s*function\s+([^(\s]*)\s*/;
var reStringToBoolean = /^true|[1-9]+$/gi;
var reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

// prototypes
var ObjectProto = Object.prototype;

var objectToString = ObjectProto.toString;

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function array(value) {
	if (value == null) { return false; }
	return value.constructor === Array;
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
	value = (radix == null ? value : parseInt(value, radix));
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
	var size = arraylike(list) && list.length;
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
	return typeof value === 'function';
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
	if (value == null) { return false; }
	if (value.constructor === Object) { return true; }
	return value.constructor === undefined;
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
