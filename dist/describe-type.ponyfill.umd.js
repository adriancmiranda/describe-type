/*!
 * 
 * ~~~~ describe-type v1.0.0-dev.3
 * 
 * @commit 92cf4b26b614012b6ea61bdc77c001afc15b6626
 * @moment Thursday, May 31, 2018 9:48 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.describetype = global.describetype || {}, global.describetype.ponyfill = {})));
}(this, (function (exports) { 'use strict';

	var NUMBER = 'number';
	var STRING = 'string';
	var SYMBOL = 'symbol';
	var OBJECT = 'object';
	var FUNCTION = 'function';
	var CONSTRUCTOR = 'constructor';

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

	// prototypes
	var ObjectProto = Object.prototype;
	var StringProto = String.prototype;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectSupportsProto = StringProto === ''.__proto__;

	/**
	 * Creates a new array with all of the elements of this array for which the
	 * provided filtering function returns true.
	 * @function
	 * @memberof utility
	 * @param {arraylike} list - list of elements.
	 * @param {Function} cmd - Function is a predicate, to test each element of
	 * the array. Return true to keep the element, false otherwise, taking three
	 * arguments:
	 *  - element: The current element being processed in the array.
	 *  - index?: The index of the current element being processed in the array.
	 *  - array?: The array filter was called upon.
	 * @param {any} context? - Value to use as this when executing callback.
	 * @returns {Array} - A new array with the elements that pass the test.
	 * If no elements pass the test, an empty array will be returned.
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	 */
	function filter(list, cmd, context) {
	  if (list === undefined || list === null) { throw new TypeError; }
	  if (callable(cmd) === false) { throw new TypeError; }
	  var result = [];
	  for (var index = 0; index < list.length; index += 1) {
	    if (objectHasOwnProperty.call(list, index) === false) { continue; }
	    var value = list[index];
	    if (cmd.call(context, value, index, list)) {
	    	result[result.length] = value;
	    }
	  }
	  return result;
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
	 * @name Object.assign
	 * @function
	 * @global
	 * @param {target}
	 * @param {...sources}
	 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 */
	var Object_assign_next = Object.assign || function assign(target) {
		if (target === undefined || target === null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}
		var rest = slice(arguments, 1);
		for (var index = 1; index < rest.length; index += 1) {
			var source = rest[index];
			if ((source === undefined || source === null) === false) {
				for (var key in source) {
					if (objectHasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}
		return target;
	};

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
	 * @param {Object} proto - The object which should be the prototype of the newly-created object.
	 * @param {Object} properties - Optional. If specified and not undefined, an object whose
	 * enumerable own properties (that is, those properties defined upon itself and not enumerable
	 * properties along its prototype chain) specify property descriptors to be added to the
	 * newly-created object, with the corresponding property names. These properties correspond to
	 * the second argument of `Object.defineProperties()`.
	 * @returns {Object}
	 */
	var Object_create_next = Object.create || function create(proto, properties) {
		if (proto === null) { return {}; }
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

	/**
	 * The Object.is() method determines whether two values are the same value.
	 * @function
	 * @param {Object} valueA - The first value to compare.
	 * @param {Object} valueB - The second value to compare.
	 * @returns {Boolean} The Object.is() method determines whether two values are
	 * the same value.
	 */
	var Object_is_next = Object.is || function is(valueA, valueB) {
		if (valueA === valueB) {
			if (valueA === 0) { return 1 / valueA === 1 / valueB; }
			return true;
		}
		var a = valueA;
		var b = valueB;
		return valueA !== a && valueB !== b;
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

	exports.filter = filter;
	exports.reduce = reduce;
	exports.slice = slice;
	exports.assign = Object_assign_next;
	exports.create = Object_create_next;
	exports.is = Object_is_next;
	exports.keys = keys;
	exports.startsWith = startsWith;

})));
