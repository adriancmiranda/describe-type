/*!
 * 
 * ~~~~ describe-type v1.0.0-rc.0
 * 
 * @commit ef04e665e1fbe5c11791b9863ef679d5234d7a1c
 * @moment Thursday, November 2, 2017 9:16 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2020 Adrian C. Miranda
 */
var type = (function (exports) {
  'use strict';

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

  // prototypes
  var ObjectProto = Object.prototype;

  // built-in method(s)
  var objectHasOwnProperty = ObjectProto.hasOwnProperty;
  var objectToString = ObjectProto.toString;

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

  /**
   *
   * @function
   * @memberof has
   * @param {String|Array} context
   * @param {any} value
   * @returns {Boolean}
   */
  function ownValue(context, value) {
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
   * @param {any} value
   * @returns {Boolean}
   */
  function array(value) {
  	return a(Array, value);
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



  var index = {
  	unsafeMethod: unsafeMethod,
  	ownProperty: ownProperty,
  	ownValue: ownValue,
  	own: own
  };

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
   * @memberof utility
   * @param {Object} context
   * @param {Boolean} getNum
   * @returns {Array}
   */
  function keys(object, getEnum) {
  	var properties = [];
  	for (var key in object) {
  		if (getEnum || ownProperty(object, key)) {
  			properties.push(key);
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
  function arraylike(value) {
  	return array(value) || (
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
  var reIsBase64 = /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var reFunctionName = /\s*function\s+([^(\s]*)\s*/;
  var reIsNativeFn = /\[native\scode\]/;
  var reStringToBoolean = /^true|[1-9]+$/gi;
  var reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

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
  function element(value) {
  	return value != null && (
  		callable(HTMLElement) &&
  		value instanceof HTMLElement &&
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
  		return (nan(test) || infinity(value) || arraylike(value)) === false;
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
  	return int(value) && value > 0;
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



  var index$1 = {
  	a: a,
  	an: a,
  	any: any,
  	empty: empty,
  	enumerable: enumerable,
  	exotic: exotic,
  	instanceOf: instanceOf,
  	not: not,
  	primitive: primitive,
  	base64: base64,
  	arraylike: arraylike,
  	element: element,
  	vector: vector,
  	decimal: decimal,
  	even: even,
  	infinity: infinity,
  	int: int,
  	nan: nan,
  	numeric: numeric,
  	odd: odd,
  	uint: uint,
  	array: array,
  	bool: bool,
  	callable: callable,
  	date: date,
  	error: error,
  	nativeFunction: nativeFunction,
  	nil: nil,
  	number: number,
  	object: object,
  	regexp: regexp,
  	string: string,
  	symbol: symbol,
  	undef: undef
  };

  /**
   *
   * @function
   * @memberof to
   * @param {any} value
   * @returns {Boolean}
   */
  function toString(value, force) {
  	var ctor = value && value.constructor;
  	if (ctor && force) {
  		if (!ctor.name || ctor.name === 'Object') {
  			var matches = ctor.toString().match(reFunctionName);
  			return matches ? matches[1] : '';
  		}
  		return ctor.name;
  	}
  	return objectToString.call(value).slice(8, -1);
  }

  /**
   *
   * @function
   * @memberof to
   * @param {any} value
   * @returns {Boolean}
   */
  function toBoolean(value) {
  	if (string(value)) {
  		return reStringToBoolean.test(value);
  	}
  	return !!value;
  }

  /**
   * The `toFloat()` function parses an argument and returns a floating point number.
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
  function toFloat(value) {
  	value = parseFloat(value);
  	return numeric(value) ? value : 0;
  }

  /**
   * The `toInt()` function parses a string argument and returns an integer of the
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
  function toInt(value, radix) {
  	return 0 | parseInt(value, radix);
  }

  /**
   * The `toUint()` function parses a string argument and returns an unsigned integer
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
  function toUint(value, radix) {
  	var num = toInt(value, radix);
  	return num < 0 ? 0 : num;
  }



  var index$2 = {
  	toString: toString,
  	toBoolean: toBoolean,
  	toFloat: toFloat,
  	toInt: toInt,
  	toUint: toUint
  };

  /**
   *
   * @function
   * @memberof of
   * @param {any} value
   * @returns {String}
   */
  function typeOf(value) {
  	if (value == null || infinity(value) || nan(value)) {
  		return String(value);
  	}
  	return args(value) ? 'Arguments' : toString(value, true);
  }

  /**
   *
   * @function
   * @memberof of
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
   * @memberof of
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
   * @memberof of
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

  function typify(expected, write) {
  	if (arraylike(expected) && expected.length > 0) {
  		var i = expected.length;
  		while (i -= 1) {
  			expected[i] = typify(expected[i], write);
  		}
  		return expected.join('|');
  	}
  	return name(expected, write);
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
  function slice(value, startIndex, endIndex) {
  	if (arraylike(value) === false) { return []; }
  	var args = [];
  	var index = uint(startIndex) ? startIndex + 1 : 1;
  	var len = value.length - index;
  	for (var id = len; id > -1; id -= 1) {
  		args[id] = value[(id + index) - 1];
  	}
  	return args;
  }

  // export { prototypes, builtIn, patterns };

  /**
   *
   * @param {Function|Array.<Function>} expected
   * @param {any} value
   * @returns {Boolean}
   */
  function as(expected, value) {
  	var args = slice(arguments, 2);
  	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
  		value = value.apply(void 0, args);
  	}
  	return any(expected, value) ? value : args[0];
  }

  exports.has = index;
  exports.is = index$1;
  exports.to = index$2;
  exports.constructorNameOf = constructorNameOf;
  exports.constructorOf = constructorOf;
  exports.typeOf = typeOf;
  exports.typify = typify;
  exports.name = name;
  exports.slice = slice;
  exports.keys = keys;
  exports.inNode = inNode;
  exports.env = env;
  exports.as = as;

  return exports;

}({}));
