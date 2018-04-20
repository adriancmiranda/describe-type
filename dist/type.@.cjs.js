/*!
 * 
 * ~~~~ describe-type v0.7.0
 * 
 * @commit 452b26b7bc87d456056dd61c1a430b52ed13d26e
 * @moment Friday, April 20, 2018 6:31 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021 Adrian C. Miranda
 */
'use strict';

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

var patterns = /*#__PURE__*/{
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

var prototypes = /*#__PURE__*/{
	ObjectProto: ObjectProto
};

// built-in method(s)
var objectHasOwnProperty = ObjectProto.hasOwnProperty;
var objectToString = ObjectProto.toString;

var builtIn = /*#__PURE__*/{
	objectHasOwnProperty: objectHasOwnProperty,
	objectToString: objectToString
};

// environment
var isBrowser = new Function('try{return this===window;}catch(err){return false;}');
var isNode = new Function('try{return this===global;}catch(err){return false;}');
var inBrowser = isBrowser();
var inNode = isNode();
var env = inNode ? global : window;

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
 * @memberof has
 * @param {Object|Function} context
 * @param {any} key
 * @returns {Boolean}
 */
function ownProperty(context, key) {
	if (context == null) { return false; }
	return objectHasOwnProperty.call(context, key);
}

/* eslint-disable no-restricted-syntax */

/**
 *
 * @function
 * @memberof utility
 * @param {Object} context
 * @param {Boolean} getNum
 * @returns {Array}
 */
function keys(object, getEnum) {
	if (object == null) { return []; }
	if (Object.keys && !getEnum) {
		return Object.keys(object);
	}
	var properties = [];
	for (var key in object) {
		if (getEnum || ownProperty(object, key)) {
			properties[properties.length] = key;
		}
	}
	return properties;
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

exports.prototypes = prototypes;
exports.builtIn = builtIn;
exports.patterns = patterns;
exports.mod = mod;
exports.slice = slice;
exports.keys = keys;
exports.apply = apply;
exports.isBrowser = isBrowser;
exports.isNode = isNode;
exports.inBrowser = inBrowser;
exports.inNode = inNode;
exports.env = env;
