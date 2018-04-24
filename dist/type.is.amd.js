/*!
 * 
 * ~~~~ describe-type v0.7.0
 * 
 * @commit b2170c3b7af743a4211094d683695d44e4955c54
 * @moment Tuesday, April 24, 2018 7:55 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021 Adrian C. Miranda
 */
define(['exports'], function (exports) { 'use strict';

	// prototypes
	var ObjectProto = Object.prototype;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = ObjectProto.toString;

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
	function array(value) {
		if (value == null) { return false; }
		return value.constructor === Array;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function type(expected, value, safe) {
		if (expected == null || value == null) { return value === expected; }
		if (typeof value === 'number' || value instanceof Number) { return expected === Number; }
		if (safe) { value = value.__proto__ || value; }
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
	function object(value) {
		return type(Object, value);
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
		return arraylike(value) || value.length === 0;
	}

	arraylike.empty = isEmptyArraylike;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function notA(expected, value) {
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
		if (expected == null) { return expected === value; }
		if (expected.constructor === Array && expected.length > 0) {
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
		if (expected == null) { return expected === value; }
		if (expected.constructor === Array && expected.length > 0) {
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

	notA.a = notA.an = notA.type = notA;
	notA.any = notAny;
	notA.instanceOf = notInstanceOf;
	notA.vectorOf = notVectorOf;

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
	function keys(object, getInheritedProps) {
		if (object == null) { return []; }
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
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyObject(value) {
		return object(value) && keys(value).length === 0;
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
	function isEmptyString(value) {
		return string(value) && value.length === 0;
	}

	string.empty = isEmptyString;

	// pattern(s)
	var reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	var reIsNativeFn = /\[native\scode\]/;
	var reIsHex = /^([A-Fa-f0-9]+|)$/;
	var reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
	var reIsJsonStart = /^\[|^\{(?!\{)/;
	var reEndsWithBracket = /\]$/;
	var reEndsWithBrace = /\}$/;
	var reIsJsonEnds = { '[': reEndsWithBracket, '{': reEndsWithBrace };

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
		var key;
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
				key = keysA[i];
				if (!equal(valueA[key], valueB[key])) {
					return false;
				}
			}
			return true;
		} else if (ctorA === Array) {
			key = valueA.length;
			if (key !== valueB.length) {
				return false;
			}
			for (key -= 1; key > -1; key -= 1) {
				if (!equal(valueA[key], valueB[key])) {
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
	function int(value) {
		return number(value) && value === value && value % 1 === 0;
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

	exports.args = args;
	exports.array = array;
	exports.arraylike = arraylike;
	exports.not = notA;
	exports.object = object;
	exports.stream = stream;
	exports.string = string;
	exports.a = type;
	exports.an = type;
	exports.any = any;
	exports.base64 = base64;
	exports.bool = bool;
	exports.buffer = buffer;
	exports.callable = callable;
	exports.date = date;
	exports.decimal = decimal;
	exports.defined = defined;
	exports.element = element;
	exports.empty = empty;
	exports.enumerable = enumerable;
	exports.equal = equal;
	exports.error = error;
	exports.even = even;
	exports.exotic = exotic;
	exports.hex = hex;
	exports.hexadecimal = hexadecimal;
	exports.hosted = hosted;
	exports.infinity = infinity;
	exports.instanceOf = instanceOf;
	exports.int = int;
	exports.jsonlike = jsonlike;
	exports.max = max;
	exports.min = min;
	exports.nan = nan;
	exports.nativeFunction = nativeFunction;
	exports.nil = nil;
	exports.number = number;
	exports.numeric = numeric;
	exports.odd = odd;
	exports.primitive = primitive;
	exports.regexp = regexp;
	exports.symbol = symbol;
	exports.type = type;
	exports.uint = uint;
	exports.undef = undef;
	exports.vector = vector;
	exports.within = within;

});
