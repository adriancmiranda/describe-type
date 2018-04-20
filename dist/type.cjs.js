/*!
 * 
 * ~~~~ describe-type v0.7.0
 * 
 * @commit 2ddc3f5b733b12c6b99f7e26ac3d69dbbbed7fa6
 * @moment Friday, April 20, 2018 6:04 PM
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



var index = /*#__PURE__*/{
	prototypes: prototypes,
	builtIn: builtIn,
	patterns: patterns,
	mod: mod,
	slice: slice,
	keys: keys,
	apply: apply,
	isBrowser: isBrowser,
	isNode: isNode,
	inBrowser: inBrowser,
	inNode: inNode,
	env: env
};

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
 * @memberof has
 * @param {Array|String|Object|Function} context
 * @param {any} value
 * @returns {Boolean}
 */
function own(context, value) {
	if (array(context)) { return ownValue(context, value); }
	return ownProperty(context, value);
}



var index$1 = /*#__PURE__*/{
	unsafeMethod: unsafeMethod,
	ownProperty: ownProperty,
	ownValue: ownValue,
	own: own
};

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
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function notA(expected, value) {
	return a(expected, value) === false;
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
	if (expected == null) { return expected === value; }
	if (expected.constructor === Array && expected.length > 0) {
		for (var i = expected.length - 1; i > -1; i -= 1) {
			if (a(expected[i], value)) { return true; }
		}
	}
	return a(expected, value);
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
	if (expected == null) { return expected === value; }
	if (expected.constructor === Array && expected.length > 0) {
		for (var i = expected.length - 1; i > -1; i -= 1) {
			var ctor = expected[i];
			if (ctor === Number) { return a(ctor, value); } // ... should normalize?!
			if (callable(ctor) && value instanceof ctor) { return true; }
		}
	}
	if (expected === Number) { return a(expected, value); } // ... should normalize?!
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

notA.a = notA.an = notA.type = notA;
notA.any = notAny;
notA.instanceOf = notInstanceOf;
notA.vectorOf = notVectorOf;

/* eslint-disable no-underscore-dangle */

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function stream(value) {
	if (value == null || value._events == null) { return false; }
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
	if (value == null) { return false; }
	var isBuffer = value.constructor === env.Buffer && callable(value.constructor.isBuffer);
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
	if (value == null) { return false; }
	return value.constructor === Date;
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
	return value != null && (
		callable(env.HTMLElement) &&
		value instanceof env.HTMLElement &&
		value.nodeType === 1
	);
}

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function empty(value) {
	if (arraylike(value)) {
		return value.length === 0;
	}
	if (object(value)) {
		return keys(value).length === 0;
	}
	if (value && typeof value === 'object' && callable(value.valueOf)) {
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
	return value != null && number(value.length) && callable(value) === false;
}

/**
 *
 * @function
 * @memberof is
 * @param {any} valueA
 * @param {any} valueB
 * @returns {Boolean}
 */
function equal(valueA, valueB) {
	if (valueA === valueB) {
		return true;
	}
	var ctorA = valueA != null && valueA.constructor;
	var ctorB = valueB != null && valueB.constructor;
	if (ctorA !== ctorB) {
		return false;
	} else if (ctorA === Object) {
		var keysA = keys(valueA);
		var keysB = keys(valueB);
		var i = keysA.length;
		if (i !== keysB.length) {
			return false;
		}
		for (i -= 1; i > -1; i -= 1) {
			var key = keysA[i];
			if (!equal(valueA[key], valueB[key])) {
				return false;
			}
		}
		return true;
	} else if (ctorA === Array) {
		var key$1 = valueA.length;
		if (key$1 !== valueB.length) {
			return false;
		}
		for (key$1 -= 1; key$1 > -1; key$1 -= 1) {
			if (!equal(valueA[key$1], valueB[key$1])) {
				return false;
			}
		}
		return true;
	} else if (ctorA === Function) {
		return valueA.prototype === valueB.prototype;
	} else if (ctorA === Date) {
		return valueA.getTime() === valueB.getTime();
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
	if (value == null) { return false; }
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
	if (value == null) { return true; }
	if (callable(value.valueOf)) { value = value.valueOf(); }
	if (callable(value) || typeof value === 'object') {
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
	return typeof value === 'string' && reIsHex.test(value);
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
	return (host == null || primitive(host[key]) === false) === true;
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
	if (value == null) { return false; }
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
function regexp(value) {
	if (value == null) { return false; }
	return value.constructor === RegExp;
}

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function symbol(value) {
	if (value == null) { return false; }
	return value.constructor === env.Symbol;
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



var index$2 = /*#__PURE__*/{
	not: notA,
	notInstanceOf: notInstanceOf,
	notVectorOf: notVectorOf,
	stream: stream,
	streamWritable: isStreamWritable,
	streamReadable: isStreamReadable,
	streamDuplex: isStreamDuplex,
	streamTransform: isStreamTransform,
	a: a,
	an: a,
	any: any,
	args: args,
	array: array,
	arraylike: arraylike,
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
	object: object,
	odd: odd,
	primitive: primitive,
	regexp: regexp,
	string: string,
	symbol: symbol,
	type: a,
	uint: uint,
	undef: undef,
	vector: vector,
	within: within
};

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
	if (string(value) && value.length) {
		return reStringToBoolean.test(value);
	}
	return !!value;
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

function getExpectedValue(expected, value, args) {
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		var context = args ? args[0] : null;
		return apply(value, context, args, true);
	}
	return value;
}

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function as(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return a(expected, value) ? value : arguments[2];
}

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function as$1(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return any(expected, value) ? value : arguments[2];
}

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function asInstanceOf(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return instanceOf(expected, value) ? value : arguments[2];
}

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function asVectorOf(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	if (expected == null) { return vector(expected, value); }
	if (expected.constructor === Array && expected.length > 0) {
		for (var i = expected.length - 1; i > -1; i -= 1) {
			if (vector(expected[i], value)) { return value; }
		}
		return arguments[2];
	}
	return vector(expected, value) ? value : arguments[2];
}

as.a = as.an = as.type = as;
as.any = as$1;
as.instanceOf = asInstanceOf;
as.vectorOf = asVectorOf;

// import { env } from '../@/env.js';
// import reduce from '../@/reduce.js';
// import startsWith from '../@/startsWith.js';
// import filter from '../@/filter.js';
// import keys from '../@/keys.js';
// import create from '../@/create.js';
// import assign from '../@/assign.js';
// import stringify from '../@/stringify';

// import typify from '../built-in/typify.js';

// import any from '../is/any.js';
// import object from '../is/object.js';
// import string from '../is/string.js';
// import array from '../is/array.js';
// import not from '../is/not.js';
// import notInstanceOf from '../is/not.instanceOf.js';

// import asAny from '../as/as.any.js';
// import asInstanceOf from '../as/as.instanceOf.js';

// import SchemaError from './SchemaError';

// const SCHEMA_PROPS = {
// 	type: true,
// 	required: true,
// 	strict: false,
// 	default: false,
// };

function schematize(pattern, settings) {
// 	const schema = as(Object, patterns) || create(null);
// 	const object = as(Object, settings) || create(null);
// 	return reduce(internal.keys(schema), (copy, key) => {
// 		if (startsWith(key, '$')) {
// 			const slug = key.substring(1);
// 			const assert = { key, data: schema[key] };
// 			const config = { key: slug, data: object[slug] };
// 			const result = parseProperty(assert, config, copy);
// 			copy[result.key] = result.data;
// 		}
// 		return copy;
// 	}, create(null));
}

/* eslint-disable no-unused-vars */

exports.has = index$1;
exports.is = index$2;
exports.internal = index;
exports.as = as;
exports.schema = schematize;
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
