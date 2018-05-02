/*!
 * 
 * ~~~~ describe-type v1.0.0
 * 
 * @commit 1204e947bcd466d7e08675c921d51f6d783b1923
 * @moment Wednesday, May 2, 2018 1:13 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
define(['exports'], function (exports) { 'use strict';

	var NUMBER = 'number';
	var STRING = 'string';
	var SYMBOL = 'symbol';
	var OBJECT = 'object';
	var FUNCTION = 'function';
	var CONSTRUCTOR = 'constructor';
	var ARGUMENTS_SEAL = '[object Arguments]';
	var CALLEE = 'callee';

	// prototypes
	var ObjectProto = Object.prototype;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = ObjectProto.toString;
	var objectGetPrototypeOf = Object.getPrototypeOf;

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

	var callable_next = /*#__PURE__*/{
		default: callable
	};

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
		return value instanceof Array;
	}

	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	function constructorOf(value) {
		if (value.constructor === undefined) { return Object; }
		var proto = value.__proto__;

		if (proto === null) { return Object; }

		return proto.constructor || getConstructorOf(value) || (function () {
			if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
				return Object;
			}
			return value.constructor.prototype.constructor;
		})();
		function getConstructorOf(value) {
			var proto = objectGetPrototypeOf(value);
			if (proto === null) { return Object; }
			return proto.constructor;
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
		if (value === undefined || value === null) { return false; }
		return constructorOf(value) === Object;
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
	function args(value) {
		return (array(value) === false && arraylike(value) &&
			object(value) && unsafeMethod(value, CALLEE)
		) || objectToString.call(value) === ARGUMENTS_SEAL;
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

	var index_next = /*#__PURE__*/{
		default: args
	};

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

	var index_next$1 = /*#__PURE__*/{
		default: array
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyArraylike(value) {
		return arraylike(value) && value.length === 0;
	}

	arraylike.empty = isEmptyArraylike;

	var index_next$2 = /*#__PURE__*/{
		default: arraylike
	};

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

	var type_next = /*#__PURE__*/{
		default: type
	};

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
	 * @function
	 * @memberof is
	 * @param {Function|Array.<Function>} expected
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function any(expected, value) {
		if (expected === undefined || expected === null) { return expected === value; }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				if (type(expected[i], value)) { return true; }
			}
		}
		return type(expected, value);
	}

	var any_next = /*#__PURE__*/{
		default: any
	};

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

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var env_1 = createCommonjsModule(function (module, exports) {

	// environment
	var inBrowser = exports.inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
	var inNode = exports.inNode = new Function('try{return this===global;}catch(err){return false;}')();
	var env = exports.env = inNode ? commonjsGlobal : window;
	});
	var env_2 = env_1.inBrowser;
	var env_3 = env_1.inNode;
	var env_4 = env_1.env;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	var FUNCTION$1 = env_1.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var callable_1 = callable$1;
	function callable$1(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === FUNCTION$1;
	}

	var prototypes = createCommonjsModule(function (module, exports) {

	// prototypes
	var ObjectProto = exports.ObjectProto = Object.prototype;
	var ArrayProto = exports.ArrayProto = Array.prototype;
	var StringProto = exports.StringProto = String.prototype;
	});
	var prototypes_1 = prototypes.ObjectProto;
	var prototypes_2 = prototypes.ArrayProto;
	var prototypes_3 = prototypes.StringProto;

	var builtIn = createCommonjsModule(function (module, exports) {



	var ObjectProto = prototypes.ObjectProto;
	var StringProto = prototypes.StringProto;


	// built-in method(s)
	var objectHasOwnProperty = exports.objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectToString = exports.objectToString = ObjectProto.toString;
	var objectGetPrototypeOf = exports.objectGetPrototypeOf = Object.getPrototypeOf;
	var objectSupportsProto = exports.objectSupportsProto = StringProto === ''.__proto__;
	});
	var builtIn_1 = builtIn.objectHasOwnProperty;
	var builtIn_2 = builtIn.objectToString;
	var builtIn_3 = builtIn.objectGetPrototypeOf;
	var builtIn_4 = builtIn.objectSupportsProto;

	var ObjectProto$1 = prototypes.ObjectProto;



	var objectGetPrototypeOf$1 = builtIn.objectGetPrototypeOf;
	var objectHasOwnProperty$1 = builtIn.objectHasOwnProperty;



	var CONSTRUCTOR$1 = env_1.CONSTRUCTOR;


	/**
	 *
	 * @function
	 * @memberof built-in
	 * @param {any} value
	 * @returns {String}
	 */
	var constructorOf_1 = constructorOf$1;
	function constructorOf$1(value) {
		if (value.constructor === undefined) { return Object; }
		var proto = value.__proto__;

		if (proto === null) { return Object; }

		return proto.constructor || getConstructorOf(value) || function () {
			if (objectHasOwnProperty$1.call(value, CONSTRUCTOR$1)) {
				return Object;
			}
			return value.constructor.prototype.constructor;
		}();
		function getConstructorOf(value) {
			var proto = objectGetPrototypeOf$1(value);
			if (proto === null) { return Object; }
			return proto.constructor;
		}
	}

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





	var STRING$1 = env_1.STRING;
	var NUMBER$1 = env_1.NUMBER;
	var SYMBOL$1 = env_1.SYMBOL;
	var FUNCTION$2 = env_1.FUNCTION;


	/**
	 *
	 * @function
	 * @memberof is
	 * @param {Function} expect
	 * @param {any} value
	 * @returns {Boolean}
	 */
	var type_1 = type$1;
	function type$1(expected, value) {
		if (value === undefined || value === null) { return value === expected; }
		if (expected === undefined || expected === null) { return expected === value; }
		if (value === true || value === false) { return expected === Boolean; }
		var type = typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
		if (type === STRING$1) { return expected === String; }
		if (type === NUMBER$1) { return expected === Number; }
		if (type === SYMBOL$1) { return expected === Symbol; }
		if (expected === Function) { return type === FUNCTION$2; }
		if (value instanceof Array) { return expected === Array; }
		if (value instanceof RegExp) { return expected === RegExp; }
		return constructorOf_1(value) === expected;
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
		if (expected === undefined || expected === null) { return expected === value; }
		if (expected instanceof Array && expected.length > 0) {
			for (var i = expected.length - 1; i > -1; i -= 1) {
				var ctor = expected[i];
				if (ctor === Number) { return type_1(ctor, value); } // ... should normalize?!
				if (callable_1(ctor) && value instanceof ctor) { return true; }
			}
		}
		if (expected === Number) { return type_1(expected, value); } // ... should normalize?!
		return callable_1(expected) && value instanceof expected;
	}

	var instanceOf_next = /*#__PURE__*/{
		default: instanceOf
	};

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

	var vector_next = /*#__PURE__*/{
		default: vector
	};

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

	notType.a = notType.an = notType.type = notType;
	notType.any = notAny;
	notType.instanceOf = notInstanceOf;
	notType.vectorOf = notVectorOf;

	var index_next$3 = /*#__PURE__*/{
		default: notType
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function isEmptyObject(value) {
		if (object(value) === false) { return false; }
		for (var key in value) {
			if (objectHasOwnProperty.call(value, key)) {
				return false;
			}
		}
		return true;
	}

	object.empty = isEmptyObject;

	var index_next$4 = /*#__PURE__*/{
		default: object
	};

	/* eslint-disable no-underscore-dangle */

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function stream(value) {
		if (value === undefined || value === null) { return false; }
		if (value._events === undefined || value._events === null) { return false; }
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

	var index_next$5 = /*#__PURE__*/{
		default: stream
	};

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

	var index_next$6 = /*#__PURE__*/{
		default: string
	};



	var a_next = /*#__PURE__*/{
		default: type
	};



	var an_next = /*#__PURE__*/{
		default: type
	};

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

	var base64_next = /*#__PURE__*/{
		default: base64
	};

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

	var bool_next = /*#__PURE__*/{
		default: bool
	};

	// environment
	var inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
	var inNode = new Function('try{return this===global;}catch(err){return false;}')();
	var env = inNode ? global : window;

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function buffer(value) {
		if (value === undefined || value === null) { return false; }
		if (callable(env.Buffer) === false) { return false; }
		var isBuffer = value instanceof env.Buffer && callable(value.constructor.isBuffer);
		return isBuffer && value.constructor.isBuffer(value);
	}

	var buffer_next = /*#__PURE__*/{
		default: buffer
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function date(value) {
		return value instanceof Date;
	}

	var date_next = /*#__PURE__*/{
		default: date
	};

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

	var number_next = /*#__PURE__*/{
		default: number
	};

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

	var infinity_next = /*#__PURE__*/{
		default: infinity
	};

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

	var decimal_next = /*#__PURE__*/{
		default: decimal
	};

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

	var undef_next = /*#__PURE__*/{
		default: undef
	};

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

	var defined_next = /*#__PURE__*/{
		default: defined
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function element(value) {
		if (value === undefined || value === null) { return false; }
		if (env.window === undefined || env.window === null) { return false; }
		return callable(env.window.HTMLElement) &&
		value instanceof env.window.HTMLElement &&
		value.nodeType === 1;
	}

	var element_next = /*#__PURE__*/{
		default: element
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function empty(value) {
		if (value === undefined || value === null) {
			return true;
		}
		if (isEmptyArraylike(value)) {
			return true;
		}
		if (isEmptyObject(value)) {
			return true;
		}
		if (callable(value.valueOf)) {
			return !value.valueOf();
		}
		return !value;
	}

	var empty_next = /*#__PURE__*/{
		default: empty
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function enumerable(value) {
		if (value === undefined || value === null) { return false; }
		return number(value.length) && callable(value) === false;
	}

	var enumerable_next = /*#__PURE__*/{
		default: enumerable
	};

	/**
	 * The Object.is() method determines whether two values are the same value.
	 * @function
	 * @param {Object} valueA - The first value to compare.
	 * @param {Object} valueB - The second value to compare.
	 * @returns {Boolean} The Object.is() method determines whether two values are
	 * the same value.
	 */
	var is = Object.is || function is(valueA, valueB) {
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
	 * The equal() method determines whether two values are the same value.
	 * @function
	 * @memberof is
	 * @param {any} valueA - The first value to compare.
	 * @param {any} valueB - The second value to compare.
	 * @returns {Boolean} A Boolean indicating whether or not the two arguments are
	 * the same value.
	 */
	function equal(valueA, valueB) {
		var size;
		if (valueA === undefined || valueA === null) {
			return is(valueA, valueB);
		} else if (valueB === undefined || valueB === null) {
			return is(valueB, valueA);
		} else if (is(valueA, valueB)) {
			return true;
		}
		var constructorA = constructorOf(valueA);
		var constructorB = constructorOf(valueB);
		if (constructorA === constructorB === false) {
			return false;
		} else if (constructorA === Object) {
			var keysA = keys(valueA);
			var keysB = keys(valueB);
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
	}

	var equal_next = /*#__PURE__*/{
		default: equal
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any}
	 * @returns {Boolean}
	 */
	function error(value) {
		return value instanceof Error;
	}

	var error_next = /*#__PURE__*/{
		default: error
	};

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

	var even_next = /*#__PURE__*/{
		default: even
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function primitive(value) {
		if (value === undefined || value === null) { return true; }
		if (callable(value.valueOf)) { value = value.valueOf(); }
		if (callable(value) || typeof value === OBJECT) {
			return false;
		}
		return true;
	}

	var primitive_next = /*#__PURE__*/{
		default: primitive
	};

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

	var exotic_next = /*#__PURE__*/{
		default: exotic
	};

	function hex(value) {
		return string(value) && reIsHex.test(value);
	}

	var hex_next = /*#__PURE__*/{
		default: hex
	};

	function hexadecimal(value) {
		return string(value) && reIsHexadecimal.test(value);
	}

	var hexadecimal_next = /*#__PURE__*/{
		default: hexadecimal
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {String|Number} key
	 * @param {Object|Array|Function} host
	 * @returns {Boolean}
	 */
	function hosted(key, host) {
		return (host === undefined || host === null || primitive(host[key]) === false) === true;
	}

	var hosted_next = /*#__PURE__*/{
		default: hosted
	};

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

	var int_next = /*#__PURE__*/{
		default: int
	};

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

	var jsonlike_next = /*#__PURE__*/{
		default: jsonlike
	};

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

	var max_next = /*#__PURE__*/{
		default: max
	};

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

	var min_next = /*#__PURE__*/{
		default: min
	};

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

	var nan_next = /*#__PURE__*/{
		default: nan
	};

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

	var nativeFunction_next = /*#__PURE__*/{
		default: nativeFunction
	};

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

	var nil_next = /*#__PURE__*/{
		default: nil
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function numeric(value) {
		if (value === undefined || value === null) { return false; }
		if (bool(value)) { return true; }
		try {
			var test = parseFloat(value);
			return (nan(test) || infinity(test) || arraylike(test)) === false;
		} catch (err) {
			return false;
		}
	}

	var numeric_next = /*#__PURE__*/{
		default: numeric
	};

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

	var odd_next = /*#__PURE__*/{
		default: odd
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function regexp(value) {
		return value instanceof RegExp;
	}

	var regexp_next = /*#__PURE__*/{
		default: regexp
	};

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function symbol(value) {
		return typeof value === SYMBOL;
	}

	var symbol_next = /*#__PURE__*/{
		default: symbol
	};

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

	var uint_next = /*#__PURE__*/{
		default: uint
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

	var within_next = /*#__PURE__*/{
		default: within
	};

	var _argsIndexNextJs = ( index_next && args ) || index_next;

	var _arrayIndexNextJs = ( index_next$1 && array ) || index_next$1;

	var _arraylikeIndexNextJs = ( index_next$2 && arraylike ) || index_next$2;

	var _notIndexNextJs = ( index_next$3 && notType ) || index_next$3;

	var _objectIndexNextJs = ( index_next$4 && object ) || index_next$4;

	var _streamIndexNextJs = ( index_next$5 && stream ) || index_next$5;

	var _stringIndexNextJs = ( index_next$6 && string ) || index_next$6;

	var _aNextJs = ( a_next && type ) || a_next;

	var _anNextJs = ( an_next && type ) || an_next;

	var _anyNextJs = ( any_next && any ) || any_next;

	var _base64NextJs = ( base64_next && base64 ) || base64_next;

	var _boolNextJs = ( bool_next && bool ) || bool_next;

	var _bufferNextJs = ( buffer_next && buffer ) || buffer_next;

	var _callableNextJs = ( callable_next && callable ) || callable_next;

	var _dateNextJs = ( date_next && date ) || date_next;

	var _decimalNextJs = ( decimal_next && decimal ) || decimal_next;

	var _definedNextJs = ( defined_next && defined ) || defined_next;

	var _elementNextJs = ( element_next && element ) || element_next;

	var _emptyNextJs = ( empty_next && empty ) || empty_next;

	var _enumerableNextJs = ( enumerable_next && enumerable ) || enumerable_next;

	var _equalNextJs = ( equal_next && equal ) || equal_next;

	var _errorNextJs = ( error_next && error ) || error_next;

	var _evenNextJs = ( even_next && even ) || even_next;

	var _exoticNextJs = ( exotic_next && exotic ) || exotic_next;

	var _hexNextJs = ( hex_next && hex ) || hex_next;

	var _hexadecimalNextJs = ( hexadecimal_next && hexadecimal ) || hexadecimal_next;

	var _hostedNextJs = ( hosted_next && hosted ) || hosted_next;

	var _infinityNextJs = ( infinity_next && infinity ) || infinity_next;

	var _instanceOfNextJs = ( instanceOf_next && instanceOf ) || instanceOf_next;

	var _intNextJs = ( int_next && int ) || int_next;

	var _jsonlikeNextJs = ( jsonlike_next && jsonlike ) || jsonlike_next;

	var _maxNextJs = ( max_next && max ) || max_next;

	var _minNextJs = ( min_next && min ) || min_next;

	var _nanNextJs = ( nan_next && nan ) || nan_next;

	var _nativeFunctionNextJs = ( nativeFunction_next && nativeFunction ) || nativeFunction_next;

	var _nilNextJs = ( nil_next && nil ) || nil_next;

	var _numberNextJs = ( number_next && number ) || number_next;

	var _numericNextJs = ( numeric_next && numeric ) || numeric_next;

	var _oddNextJs = ( odd_next && odd ) || odd_next;

	var _primitiveNextJs = ( primitive_next && primitive ) || primitive_next;

	var _regexpNextJs = ( regexp_next && regexp ) || regexp_next;

	var _symbolNextJs = ( symbol_next && symbol ) || symbol_next;

	var _typeNextJs = ( type_next && type ) || type_next;

	var _uintNextJs = ( uint_next && uint ) || uint_next;

	var _undefNextJs = ( undef_next && undef ) || undef_next;

	var _vectorNextJs = ( vector_next && vector ) || vector_next;

	var _withinNextJs = ( within_next && within ) || within_next;

	var args$1 = _argsIndexNextJs;
	var array$1 = _arrayIndexNextJs;
	var arraylike$1 = _arraylikeIndexNextJs;
	var not = _notIndexNextJs;
	var object$1 = _objectIndexNextJs;
	var stream$1 = _streamIndexNextJs;
	var string$1 = _stringIndexNextJs;
	var a = _aNextJs;
	var an = _anNextJs;
	var any$1 = _anyNextJs;
	var base64$1 = _base64NextJs;
	var bool$1 = _boolNextJs;
	var buffer$1 = _bufferNextJs;
	var callable$2 = _callableNextJs;
	var date$1 = _dateNextJs;
	var decimal$1 = _decimalNextJs;
	var defined$1 = _definedNextJs;
	var element$1 = _elementNextJs;
	var empty$1 = _emptyNextJs;
	var enumerable$1 = _enumerableNextJs;
	var equal$1 = _equalNextJs;
	var error$1 = _errorNextJs;
	var even$1 = _evenNextJs;
	var exotic$1 = _exoticNextJs;
	var hex$1 = _hexNextJs;
	var hexadecimal$1 = _hexadecimalNextJs;
	var hosted$1 = _hostedNextJs;
	var infinity$1 = _infinityNextJs;
	var instanceOf$1 = _instanceOfNextJs;
	var int_1 = _intNextJs;
	var jsonlike$1 = _jsonlikeNextJs;
	var max$1 = _maxNextJs;
	var min$1 = _minNextJs;
	var nan$1 = _nanNextJs;
	var nativeFunction$1 = _nativeFunctionNextJs;
	var nil$1 = _nilNextJs;
	var number$1 = _numberNextJs;
	var numeric$1 = _numericNextJs;
	var odd$1 = _oddNextJs;
	var primitive$1 = _primitiveNextJs;
	var regexp$1 = _regexpNextJs;
	var symbol$1 = _symbolNextJs;
	var type$2 = _typeNextJs;
	var uint$1 = _uintNextJs;
	var undef$1 = _undefNextJs;
	var vector$1 = _vectorNextJs;
	var within$1 = _withinNextJs;

	var is$1 = {
		args: args$1,
		array: array$1,
		arraylike: arraylike$1,
		not: not,
		object: object$1,
		stream: stream$1,
		string: string$1,
		a: a,
		an: an,
		any: any$1,
		base64: base64$1,
		bool: bool$1,
		buffer: buffer$1,
		callable: callable$2,
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
		int: int_1,
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
		regexp: regexp$1,
		symbol: symbol$1,
		type: type$2,
		uint: uint$1,
		undef: undef$1,
		vector: vector$1,
		within: within$1
	};

	exports.default = is$1;
	exports.args = args$1;
	exports.array = array$1;
	exports.arraylike = arraylike$1;
	exports.not = not;
	exports.object = object$1;
	exports.stream = stream$1;
	exports.string = string$1;
	exports.a = a;
	exports.an = an;
	exports.any = any$1;
	exports.base64 = base64$1;
	exports.bool = bool$1;
	exports.buffer = buffer$1;
	exports.callable = callable$2;
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
	exports.int = int_1;
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
	exports.regexp = regexp$1;
	exports.symbol = symbol$1;
	exports.type = type$2;
	exports.uint = uint$1;
	exports.undef = undef$1;
	exports.vector = vector$1;
	exports.within = within$1;

});
