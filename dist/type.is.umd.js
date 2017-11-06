/*!
 * 
 * ~~~~ describe-type v0.4.0
 * 
 * @commit 1115b6fa27768370136ccdc6e43ea73f71d20ba1
 * @moment Monday, November 6, 2017 2:59 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2020 Adrian C. Miranda
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.type = global.type || {}, global.type.is = {})));
}(this, (function (exports) { 'use strict';

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
	function any(expected, value) {
		if (expected == null) { return expected === value; }
		if (expected.constructor === Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (a(expected[i], value)) { return true; }
			}
		}
		return a(expected, value);
	}

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

	/**
	 *
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
				if (ctor === Number) { return a(ctor, value); }
				if (callable(ctor) && value instanceof ctor) { return true; }
			}
		}
		if (expected === Number) { return a(expected, value); }
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
	function not(expected, value) {
		return any(expected, value) === false;
	}

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

	// environment
	var inNode = typeof window === 'undefined';
	var env = inNode ? global : window;

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
	 * @param {Function|Array.<Function>} expected
	 * @param {arraylike} value
	 * @returns {Boolean}
	 */
	function vector(expected, value) {
		if (arraylike(value) === false) { return false; }
		for (var i = value.length - 1; i > -1; i -= 1) {
			if (not(expected, value[i])) { return false; }
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
	function uint(value) {
		return int(value) && value >= 0;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function date(value) {
		return a(Date, value);
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
	function regexp(value) {
		return a(RegExp, value);
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function symbol(value) {
		return a(env.Symbol, value);
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

	exports.a = a;
	exports.an = a;
	exports.any = any;
	exports.args = args;
	exports.empty = empty;
	exports.enumerable = enumerable;
	exports.equal = equal;
	exports.exotic = exotic;
	exports.instanceOf = instanceOf;
	exports.not = not;
	exports.primitive = primitive;
	exports.base64 = base64;
	exports.hex = hex;
	exports.hexadecimal = hexadecimal;
	exports.jsonlike = jsonlike;
	exports.arraylike = arraylike;
	exports.element = element;
	exports.vector = vector;
	exports.decimal = decimal;
	exports.even = even;
	exports.infinity = infinity;
	exports.int = int;
	exports.nan = nan;
	exports.numeric = numeric;
	exports.odd = odd;
	exports.uint = uint;
	exports.array = array;
	exports.bool = bool;
	exports.callable = callable;
	exports.date = date;
	exports.error = error;
	exports.nativeFunction = nativeFunction;
	exports.nil = nil;
	exports.number = number;
	exports.object = object;
	exports.regexp = regexp;
	exports.string = string;
	exports.symbol = symbol;
	exports.undef = undef;

})));
