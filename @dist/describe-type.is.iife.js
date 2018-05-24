/*!
 * 
 * ~~~~ describe-type v1.0.0
 * 
 * @commit 097bd6cdc9b7ff181443c206103b453ab243b49b
 * @moment Thursday, May 24, 2018 11:15 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
this.describetype = this.describetype || {};
this.describetype.is = (function (exports) {
	'use strict';

	var NUMBER = 'number';
	var BOOLEAN = 'boolean';
	var STRING = 'string';
	var SYMBOL = 'symbol';
	var OBJECT = 'object';
	var FUNCTION = 'function';
	var NULL = 'null';
	var UNDEFINED = 'undefined';
	var GENERATOR_FUNCTION = 'GeneratorFunction';
	var ASYNC_FUNCTION = 'AsyncFunction';
	var ARGUMENTS = 'Arguments';
	var INFINITY = 'Infinity';
	var NAN = 'NaN';
	var CONSTRUCTOR = 'constructor';
	var PREFIX_SEAL = '[object ';
	var ARGUMENTS_SEAL = '[object Arguments]';
	var CALLEE = 'callee';

	var constants = {
		NUMBER: NUMBER,
		BOOLEAN: BOOLEAN,
		STRING: STRING,
		SYMBOL: SYMBOL,
		OBJECT: OBJECT,
		FUNCTION: FUNCTION,
		NULL: NULL,
		UNDEFINED: UNDEFINED,
		GENERATOR_FUNCTION: GENERATOR_FUNCTION,
		ASYNC_FUNCTION: ASYNC_FUNCTION,
		ARGUMENTS: ARGUMENTS,
		INFINITY: INFINITY,
		NAN: NAN,
		CONSTRUCTOR: CONSTRUCTOR,
		PREFIX_SEAL: PREFIX_SEAL,
		ARGUMENTS_SEAL: ARGUMENTS_SEAL,
		CALLEE: CALLEE
	};

	// prototypes
	var ObjectProto = Object.prototype;
	var ArrayProto = Array.prototype;
	var StringProto = String.prototype;

	var prototypes = {
		ObjectProto: ObjectProto,
		ArrayProto: ArrayProto,
		StringProto: StringProto
	};

	var ObjectProto$1 = prototypes.ObjectProto;
	var StringProto$1 = prototypes.StringProto;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto$1.hasOwnProperty;
	var objectToString = ObjectProto$1.toString;
	var objectGetPrototypeOf = Object.getPrototypeOf;
	var objectSupportsProto = StringProto$1 === ''.__proto__;

	var builtIn = {
		objectHasOwnProperty: objectHasOwnProperty,
		objectToString: objectToString,
		objectGetPrototypeOf: objectGetPrototypeOf,
		objectSupportsProto: objectSupportsProto
	};

	var FUNCTION$1 = constants.FUNCTION;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var callable = function callable(value) {
		return typeof value === FUNCTION$1;
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {object} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var unsafeMethod = function unsafeMethod(context, methodName) {
		try {
			return callable(context[methodName]);
		} catch (err) {
			return false;
		}
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var array = function array(value) {
		return value instanceof Array;
	};

	var CONSTRUCTOR$1 = constants.CONSTRUCTOR;
	var objectGetPrototypeOf$1 = builtIn.objectGetPrototypeOf;
	var objectHasOwnProperty$1 = builtIn.objectHasOwnProperty;

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	var constructorOf = function constructorOf(value) {
		if (value.constructor === undefined) { return Object; }
		var proto = value.__proto__;

		if (proto === null) { return Object; }

		return proto.constructor || getConstructorOf(value) || (function () {
			if (objectHasOwnProperty$1.call(value, CONSTRUCTOR$1)) {
				return Object;
			}
			return value.constructor.prototype.constructor;
		})();
		function getConstructorOf(value) {
			var proto = objectGetPrototypeOf$1(value);
			if (proto === null) { return Object; }
			return proto.constructor;
		}
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var object = function object(value) {
		if (value === undefined || value === null) { return false; }
		return constructorOf(value) === Object;
	};

	var STRING$1 = constants.STRING;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var string = function string(value) {
		return typeof value === STRING$1 || value instanceof String;
	};

	var OBJECT$1 = constants.OBJECT;
	var NUMBER$1 = constants.NUMBER;



	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var arraylike = function arraylike(value) {
		return array(value) || string(value) || (
			(!!value && typeof value === OBJECT$1 && typeof value.length === NUMBER$1) &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		);
	};

	var CALLEE$1 = constants.CALLEE;
	var ARGUMENTS_SEAL$1 = constants.ARGUMENTS_SEAL;
	var objectToString$1 = builtIn.objectToString;





	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var args = function args(value) {
		return (array(value) === false && arraylike(value) &&
			object(value) && unsafeMethod(value, CALLEE$1)
		) || objectToString$1.call(value) === ARGUMENTS_SEAL$1;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var args_empty = function isEmptyArgs(value) {
		return args(value) && value.length === 0;
	};

	args.empty = args_empty;
	var args_1 = args;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var array_empty = function isEmptyArray(value) {
		return array(value) && value.length === 0;
	};

	array.empty = array_empty;
	var array_1 = array;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var arraylike_empty = function isEmptyArraylike(value) {
		return arraylike(value) && value.length === 0;
	};

	arraylike.empty = arraylike_empty;
	var arraylike_1 = arraylike;

	var STRING$2 = constants.STRING;
	var NUMBER$2 = constants.NUMBER;
	var SYMBOL$1 = constants.SYMBOL;
	var FUNCTION$2 = constants.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var type = function type(expected, value) {
		if (value === undefined || value === null) { return value === expected; }
		if (expected === undefined || expected === null) { return expected === value; }
		if (value === true || value === false) { return expected === Boolean; }
		var type = typeof value;
		if (type === STRING$2) { return expected === String; }
		if (type === NUMBER$2) { return expected === Number; }
		if (type === SYMBOL$1) { return expected === Symbol; }
		if (expected === Function) { return type === FUNCTION$2; }
		if (value instanceof Array) { return expected === Array; }
		if (value instanceof RegExp) { return expected === RegExp; }
		return constructorOf(value) === expected;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var not_type = function notType(expected, value) {
		return type(expected, value) === false;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var any = function any(expected, value) {
		if (expected === undefined || expected === null) { return expected === value; }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (type(expected[i], value)) { return true; }
			}
		}
		return type(expected, value);
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var not_any = function notAny(expected, value) {
		return any(expected, value) === false;
	};

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var instanceOf = function instanceOf(expected, value) {
		if (expected === undefined || expected === null) { return expected === value; }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				var ctor = expected[i];
				if (ctor === Number) { return type(ctor, value); } // ... should normalize?!
				if (callable(ctor) && value instanceof ctor) { return true; }
			}
		}
		if (expected === Number) { return type(expected, value); } // ... should normalize?!
		return callable(expected) && value instanceof expected;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var not_instanceOf = function notInstanceOf(expected, value) {
		return instanceOf(expected, value) === false;
	};

	/**
	 * TODO: a,an,any
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {arraylike} value
	 * @returns {Boolean}
	 */
	var vector = function vector(expected, value) {
		if (arraylike(value) === false) { return false; }
		for (var i = value.length - 1; i > -1; i -= 1) {
			if (not_any(expected, value[i])) { return false; }
		}
		return true;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var not_vectorOf = function notVectorOf(expected, value) {
		return vector(expected, value) === false;
	};

	not_type.a = not_type.an = not_type.type = not_type;
	not_type.any = not_any;
	not_type.instanceOf = not_instanceOf;
	not_type.vectorOf = not_vectorOf;
	var not = not_type;

	var objectHasOwnProperty$2 = builtIn.objectHasOwnProperty;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var object_empty = function isEmptyObject(value) {
		if (object(value) === false) { return false; }
		for (var key in value) {
			if (objectHasOwnProperty$2.call(value, key)) {
				return false;
			}
		}
		return true;
	};

	object.empty = object_empty;
	var object_1 = object;

	/* eslint-disable no-underscore-dangle */


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var stream = function stream(value) {
		if (value === undefined || value === null) { return false; }
		if (value._events === undefined || value._events === null) { return false; }
		return callable(value.pipe);
	};

	/* eslint-disable no-underscore-dangle */



	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var stream_writable = function isStreamWritable(value) {
		return stream(value) &&
		value.writable !== false &&
		value._writableState != null &&
		callable(value._write);
	};

	/* eslint-disable no-underscore-dangle */



	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var stream_readable = function isStreamReadable(value) {
		return stream(value) &&
		value.readable !== false &&
		value._readableState != null &&
		callable(value._read);
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var stream_duplex = function isStreamDuplex(value) {
		return stream_writable(value) && stream_readable(value);
	};

	/* eslint-disable no-underscore-dangle */



	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var stream_transform = function isStreamTransform(value) {
		return stream_duplex(value) &&
		value._transformState != null &&
		callable(value._transform);
	};

	stream.writable = stream_writable;
	stream.readable = stream_readable;
	stream.duplex = stream_duplex;
	stream.transform = stream_transform;
	var stream_1 = stream;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var string_empty = function isEmptyString(value) {
		return string(value) && value.length === 0;
	};

	string.empty = string_empty;
	var string_1 = string;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var regexp = function regexp(value) {
		return value instanceof RegExp;
	};

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var patterns = createCommonjsModule(function (module, exports) {
	// pattern(s)
	exports.reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	exports.reFunctionName = /\s*function\s+([^(\s]*)\s*/;
	exports.reIsNativeFn = /\[native\scode\]/;
	exports.reStringToBoolean = /^true|[1-9]+$/gi;
	exports.reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
	exports.reIsHex = /^([A-Fa-f0-9]+|)$/;
	exports.reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
	exports.reIsJsonStart = /^\[|^\{(?!\{)/;
	exports.reEndsWithBracket = /\]$/;
	exports.reEndsWithBrace = /\}$/;
	exports.reIsJsonEnds = { '[': exports.reEndsWithBracket, '{': exports.reEndsWithBrace };
	});
	var patterns_1 = patterns.reIsBase64;
	var patterns_2 = patterns.reFunctionName;
	var patterns_3 = patterns.reIsNativeFn;
	var patterns_4 = patterns.reStringToBoolean;
	var patterns_5 = patterns.reToPropName;
	var patterns_6 = patterns.reIsHex;
	var patterns_7 = patterns.reIsHexadecimal;
	var patterns_8 = patterns.reIsJsonStart;
	var patterns_9 = patterns.reEndsWithBracket;
	var patterns_10 = patterns.reEndsWithBrace;
	var patterns_11 = patterns.reIsJsonEnds;

	var reRegExp = patterns.reRegExp;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var regexp_string = function isRegExpString(value) {
		if (string(value)) {
			reRegExp.lastIndex = 0;
			return reRegExp.test(value);
		}
		return false;
	};

	regexp.empty = regexp_string;
	var regexp_1 = regexp;

	/**
	 * @memberof is
	 * @alias a
	 */
	var a = type;

	/**
	 * @memberof is
	 * @alias a
	 */
	var an = type;

	var reIsBase64 = patterns.reIsBase64;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var base64 = function base64(value) {
		return string(value) && reIsBase64.test(value);
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var bool = function bool(value) {
		return value === true || value === false || value instanceof Boolean;
	};

	// environment
	var inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
	var inNode_1 = new Function('try{return this===global;}catch(err){return false;}')();
	var env_1 = inNode ? commonjsGlobal : window;

	var env = {
		inBrowser: inBrowser,
		inNode: inNode_1,
		env: env_1
	};

	var env$1 = env.env;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var buffer = function buffer(value) {
		if (value === undefined || value === null) { return false; }
		if (callable(env$1.Buffer) === false) { return false; }
		var isBuffer = value instanceof env$1.Buffer && callable(value.constructor.isBuffer);
		return isBuffer && value.constructor.isBuffer(value);
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var date = function date(value) {
		return value instanceof Date;
	};

	var NUMBER$3 = constants.NUMBER;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var number = function number(value) {
		return typeof value === NUMBER$3 || value instanceof Number;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var infinity = function infinity(value) {
		return number(value) && (value - 1) === value;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var decimal = function decimal(value) {
		return number(value) && value === value && infinity(value) === false && value % 1 !== 0;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	var undef = function undef(value) {
		return value === undefined;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	var defined = function defined(value) {
		return undef(value) === false;
	};

	var env$2 = env.env;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var element = function element(value) {
		if (value === undefined || value === null) { return false; }
		if (env$2.window === undefined || env$2.window === null) { return false; }
		return callable(env$2.window.HTMLElement) &&
		value instanceof env$2.window.HTMLElement &&
		value.nodeType === 1;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var empty = function empty(value) {
		if (value === undefined || value === null) {
			return true;
		}
		if (arraylike_empty(value)) {
			return true;
		}
		if (object_empty(value)) {
			return true;
		}
		if (callable(value.valueOf)) {
			return !value.valueOf();
		}
		return !value;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var enumerable = function enumerable(value) {
		if (value === undefined || value === null) { return false; }
		return number(value.length) && callable(value) === false;
	};

	/**
	 * The Object.is() method determines whether two values are the same value.
	 * @function
	 * @param {Object} valueA - The first value to compare.
	 * @param {Object} valueB - The second value to compare.
	 * @returns {Boolean} The Object.is() method determines whether two values are
	 * the same value.
	 */
	var Object_is = Object.is || function is(valueA, valueB) {
		if (valueA === valueB) {
			if (valueA === 0) { return 1 / valueA === 1 / valueB; }
			return true;
		}
		var a = valueA;
		var b = valueB;
		return valueA !== a && valueB !== b;
	};

	var objectHasOwnProperty$3 = builtIn.objectHasOwnProperty;

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	var ownProperty = function ownProperty(context, key) {
		if (context === undefined || context === null) { return false; }
		return objectHasOwnProperty$3.call(context, key);
	};

	/* eslint-disable no-restricted-syntax */


	/**
	 *
	 * @function
	 * @memberof utility
	 * @param {Object} keys -
	 * @param {Boolean} getInheritedProps -
	 * @returns {Array}
	 */
	var Object_keys = function keys(object, getInheritedProps) {
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
	};

	/**
	 * The equal() method determines whether two values are the same value.
	 * @function
	 * @memberof is
	 * @param {any} valueA - The first value to compare.
	 * @param {any} valueB - The second value to compare.
	 * @returns {Boolean} A Boolean indicating whether or not the two arguments are
	 * the same value.
	 */
	var equal = function equal(valueA, valueB) {
		var size;
		if (valueA === undefined || valueA === null) {
			return Object_is(valueA, valueB);
		} else if (valueB === undefined || valueB === null) {
			return Object_is(valueB, valueA);
		} else if (Object_is(valueA, valueB)) {
			return true;
		}
		var constructorA = constructorOf(valueA);
		var constructorB = constructorOf(valueB);
		if (constructorA === constructorB === false) {
			return false;
		} else if (constructorA === Object) {
			var keysA = Object_keys(valueA);
			var keysB = Object_keys(valueB);
			size = keysA.length;
			if (size === keysB.length === false) {
				return false;
			}
			for (size -= 1; size > -1; size -= 1) {
				var key = keysA[size];
				if (equal(valueA[key], valueB[key]) === false) {
					return false;
				}
			}
			return true;
		} else if (constructorA === Array) {
			size = valueA.length;
			if (size === valueB.length === false) {
				return false;
			}
			for (size -= 1; size > -1; size -= 1) {
				if (equal(valueA[size], valueB[size]) === false) {
					return false;
				}
			}
			return true;
		} else if (constructorA === Function) {
			return valueA.prototype === valueB.prototype;
		} else if (constructorA === Date) {
			return valueA.getTime() === valueB.getTime();
		} else if (constructorA === RegExp) {
			return valueA.source === valueB.source && valueA.flags === valueB.flags;
		}
		return false;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	var error = function error(value) {
		return value instanceof Error;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var even = function even(value) {
		return infinity(value) || (number(value) && value === value && value % 2 === 0);
	};

	var OBJECT$2 = constants.OBJECT;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var primitive = function primitive(value) {
		if (value === undefined || value === null) { return true; }
		if (callable(value.valueOf)) { value = value.valueOf(); }
		if (callable(value) || typeof value === OBJECT$2) {
			return false;
		}
		return true;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	var exotic = function exotic(value) {
		return primitive(value) === false;
	};

	var reIsHex = patterns.reIsHex;


	var hex = function hex(value) {
		return string(value) && reIsHex.test(value);
	};

	var reIsHexadecimal = patterns.reIsHexadecimal;


	var hexadecimal = function hexadecimal(value) {
		return string(value) && reIsHexadecimal.test(value);
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {String|Number} key
	 * @param {Object|Array|Function} host
	 * @returns {Boolean}
	 */
	var hosted = function hosted(key, host) {
		return (host === undefined || host === null || primitive(host[key]) === false) === true;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var int_1 = function int(value) {
		return number(value) && value === value && value % 1 === 0;
	};

	var reIsJsonStart = patterns.reIsJsonStart;
	var reIsJsonEnds = patterns.reIsJsonEnds;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var jsonlike = function jsonlike(value) {
		if (string(value)) {
			var start = value.match(reIsJsonStart);
			return !!(start && reIsJsonEnds[start[0]].test(value));
		}
		return false;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Number} value
	 * @param {arraylike} others
	 * @returns {Boolean}
	 */
	var max = function max(value, others) {
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
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Number} value
	 * @param {arraylike} others
	 * @returns {Boolean}
	 */
	var min = function min(value, others) {
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
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var nan = function nan(value) {
		var isnum = number(value);
		return isnum === false || (isnum && value !== value);
	};

	var reIsNativeFn = patterns.reIsNativeFn;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	var nativeFunction = function nativeFunction(value) {
		return callable(value) && reIsNativeFn.test(value.toString());
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	var nil = function nil(value) {
		return value === null;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var numeric = function numeric(value) {
		if (value === undefined || value === null) { return false; }
		if (bool(value)) { return true; }
		try {
			var test = parseFloat(value);
			return (nan(test) || infinity(test) || arraylike(test)) === false;
		} catch (err) {
			return false;
		}
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var odd = function odd(value) {
		return infinity(value) || (number(value) && value === value && value % 2 !== 0);
	};

	var SYMBOL$2 = constants.SYMBOL;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var symbol = function symbol(value) {
		return typeof value === SYMBOL$2;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var uint = function uint(value) {
		return int_1(value) && value >= 0;
	};

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
	var floatOf = function floatOf(value) {
		value = +value;
		return nan(value) || infinity(value) ? 0 : value;
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Number} value
	 * @param {Number} start
	 * @param {Number} finish
	 * @returns {Boolean}
	 */
	var within = function within(value, start, finish) {
		value = floatOf(value);
		start = floatOf(start);
		finish = floatOf(finish);
		return infinity(value) || infinity(start) || infinity(finish) ||
			(value >= start && value <= finish)
		;
	};

	var args$1 = args_1;
	var array$1 = array_1;
	var arraylike$1 = arraylike_1;
	var not$1 = not;
	var object$1 = object_1;
	var stream$1 = stream_1;
	var string$1 = string_1;
	var regexp$1 = regexp_1;
	var a$1 = a;
	var an$1 = an;
	var any$1 = any;
	var base64$1 = base64;
	var bool$1 = bool;
	var buffer$1 = buffer;
	var callable$1 = callable;
	var date$1 = date;
	var decimal$1 = decimal;
	var defined$1 = defined;
	var element$1 = element;
	var empty$1 = empty;
	var enumerable$1 = enumerable;
	var equal$1 = equal;
	var error$1 = error;
	var even$1 = even;
	var exotic$1 = exotic;
	var hex$1 = hex;
	var hexadecimal$1 = hexadecimal;
	var hosted$1 = hosted;
	var infinity$1 = infinity;
	var instanceOf$1 = instanceOf;
	var int_1$1 = int_1;
	var jsonlike$1 = jsonlike;
	var max$1 = max;
	var min$1 = min;
	var nan$1 = nan;
	var nativeFunction$1 = nativeFunction;
	var nil$1 = nil;
	var number$1 = number;
	var numeric$1 = numeric;
	var odd$1 = odd;
	var primitive$1 = primitive;
	var symbol$1 = symbol;
	var type$1 = type;
	var uint$1 = uint;
	var undef$1 = undef;
	var vector$1 = vector;
	var within$1 = within;

	var is = {
		args: args$1,
		array: array$1,
		arraylike: arraylike$1,
		not: not$1,
		object: object$1,
		stream: stream$1,
		string: string$1,
		regexp: regexp$1,
		a: a$1,
		an: an$1,
		any: any$1,
		base64: base64$1,
		bool: bool$1,
		buffer: buffer$1,
		callable: callable$1,
		date: date$1,
		decimal: decimal$1,
		defined: defined$1,
		element: element$1,
		empty: empty$1,
		enumerable: enumerable$1,
		equal: equal$1,
		error: error$1,
		even: even$1,
		exotic: exotic$1,
		hex: hex$1,
		hexadecimal: hexadecimal$1,
		hosted: hosted$1,
		infinity: infinity$1,
		instanceOf: instanceOf$1,
		int: int_1$1,
		jsonlike: jsonlike$1,
		max: max$1,
		min: min$1,
		nan: nan$1,
		nativeFunction: nativeFunction$1,
		nil: nil$1,
		number: number$1,
		numeric: numeric$1,
		odd: odd$1,
		primitive: primitive$1,
		symbol: symbol$1,
		type: type$1,
		uint: uint$1,
		undef: undef$1,
		vector: vector$1,
		within: within$1
	};

	exports.default = is;
	exports.args = args$1;
	exports.array = array$1;
	exports.arraylike = arraylike$1;
	exports.not = not$1;
	exports.object = object$1;
	exports.stream = stream$1;
	exports.string = string$1;
	exports.regexp = regexp$1;
	exports.a = a$1;
	exports.an = an$1;
	exports.any = any$1;
	exports.base64 = base64$1;
	exports.bool = bool$1;
	exports.buffer = buffer$1;
	exports.callable = callable$1;
	exports.date = date$1;
	exports.decimal = decimal$1;
	exports.defined = defined$1;
	exports.element = element$1;
	exports.empty = empty$1;
	exports.enumerable = enumerable$1;
	exports.equal = equal$1;
	exports.error = error$1;
	exports.even = even$1;
	exports.exotic = exotic$1;
	exports.hex = hex$1;
	exports.hexadecimal = hexadecimal$1;
	exports.hosted = hosted$1;
	exports.infinity = infinity$1;
	exports.instanceOf = instanceOf$1;
	exports.int = int_1$1;
	exports.jsonlike = jsonlike$1;
	exports.max = max$1;
	exports.min = min$1;
	exports.nan = nan$1;
	exports.nativeFunction = nativeFunction$1;
	exports.nil = nil$1;
	exports.number = number$1;
	exports.numeric = numeric$1;
	exports.odd = odd$1;
	exports.primitive = primitive$1;
	exports.symbol = symbol$1;
	exports.type = type$1;
	exports.uint = uint$1;
	exports.undef = undef$1;
	exports.vector = vector$1;
	exports.within = within$1;

	return exports;

}({}));
