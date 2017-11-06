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
	(factory((global.type = {})));
}(this, (function (exports) { 'use strict';

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

	// prototypes
	var ObjectProto = Object.prototype;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = ObjectProto.toString;

	// environment
	var inNode = typeof window === 'undefined';
	var env = inNode ? global : window;

	function intOf(value, radix) {
		return 0 | parseInt(value, radix);
	}
	function mod(index, min, max) {
		min = intOf(min);
		max = intOf(max) || min || 1;
		index = intOf(index);
		var value = index % max;
		return value < min ? (value + max) : value;
	}
	function a(expected, value) {
		if (expected == null || value == null) { return value === expected; }
		if (value.constructor === expected) { return true; }
		if (value.constructor === undefined) { return expected === Object; }
		return expected === Function && (
			value.constructor.name === 'GeneratorFunction' ||
			value.constructor.name === 'AsyncFunction'
		);
	}
	function array(value) {
		return a(Array, value);
	}
	function string(value) {
		return typeof value === 'string' || value instanceof String;
	}
	function arraylike(value) {
		return array(value) || string(value) || (
			(!!value && typeof value === 'object' && typeof value.length === 'number') &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		);
	}
	function slice(list, startIndex, endIndex) {
		var range = [];
		if (arraylike(list)) {
			var size = list.length;
			var start = mod(startIndex, 0, size);
			var end = mod(endIndex, 0, size) || size;
			if (string(list)) {
				range = '';
				while (start < end) {
					range += list[start];
					start += 1;
				}
				return range;
			}
			while (start < end) {
				range[range.length] = list[start];
				start += 1;
			}
		}
		return range;
	}
	function callable(value) {
		return a(Function, value);
	}
	function ownValue(context, value) {
		if (arraylike(context) === false) { return false; }
		for (var id = context.length - 1; id > -1; id -= 1) {
			if (value === context[id]) {
				return true;
			}
		}
		return false;
	}
	function any(expected, value) {
		if (expected == null) { return expected === value; }
		if (expected.constructor === Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (a(expected[i], value)) { return true; }
			}
		}
		return a(expected, value);
	}
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
	function as(expected, value) {
		var args = slice(arguments, 2);
		if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {console.log('argS:', args);
			value = value.apply(args[0], args);
		}
		return any(expected, value) ? value : args[0];
	}
	exports.as = as;
})));
type.as(String, function(user){ console.log('->', this); return `hello ${user}`; }, 'fulano');
