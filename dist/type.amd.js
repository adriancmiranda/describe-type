/*!
 *    /     '      /  /
 *   /__      ___ (  /
 *   \--`-'-|`---\ |
 *    |' _/   ` __/ /
 *    '._  W    ,--'
 *       |_:_._/
 *
 * ~~~~ describe-type v0.2.3
 *
 * @moment Wednesday, July 5, 2017 12:25 PM
 * @commit dd652fc4896f59b1f4dad49444f1a806f252f57c
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
define(function () { 'use strict';

	var constructorOf$1 = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var is_arrayLike = function isArrayLike(value) {
		return (constructorOf$1(value) === Array || (!!value &&
			typeof value === 'object' && typeof value.length === 'number' &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		));
	};

	var objectToString = Object.prototype.toString;
	var reName$1 = /^.*function\s([^\s]*|[^(]*)\([^\x00]+/m;
	var reTrim = /\s+/g;

	var toString_1$1 = function toString(value, force) {
		if (value && value.constructor && force) {
			if (!value.constructor.name || value.constructor.name === 'Object') {
				return value.constructor.toString().replace(reName$1, '$1').replace(reTrim, '');
			}
			return value.constructor.name;
		}
		return objectToString.call(value).slice(8, -1);
	};

	var of$1 = function typeOf(value) {
		var name = toString_1$1(value, true);
		if (value === Infinity || value === undefined || value === null || (name === 'Number' && isNaN(value))) {
			return String(value);
		}
		return name === 'Object' && is_arrayLike(value) ? 'Arguments' : name;
	};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var constructorNameOf$1 = function constructorNameOf(value) {
		var name = of$1(value);
		return (name === 'Function' && Object(value).name) || name;
	};

	var varName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

	var name$1 = function name(value, write) {
		var type = of$1(value);
		if (type === 'Object' || value === undefined || value === null) {
			return type;
		}
		return Object(value).name || (write && type === 'String' ?
			value.replace(varName, '_') :
			constructorNameOf$1(value)
		);
	};

	var typify$1 = createCommonjsModule(function (module) {
	module.exports = function typify(expected, write) {
		var i = 0;
		if (constructorOf$1(expected) === Array && expected.length > 0) {
			while (i < expected.length) {
				expected[i] = module.exports(expected[i], write);
				i += 1;
			}
			return expected.join('|');
		}
		return name$1(expected, write);
	};
	});

	var is_buffer = function isBuffer(value) {
		try {
			return constructorOf$1(value) === Buffer;
		} catch (err) {
			return false;
		}
	};

	function is$1(expected, value) {
		return new RegExp('(' + typify$1(expected, true) + ')').test(of$1(value));
	}

	is$1.not = function isnt(expected, value) {
		return !is$1(expected, value);
	};

	is$1.not.buffer = function isntBuffer(value) {
		return !is_buffer(value);
	};

	is$1.not.arrayLike = function isntArrayLike(value) {
		return !is_arrayLike(value);
	};

	is$1.buffer = is_buffer;
	is$1.arrayLike = is_arrayLike;
	is$1.a = is$1.an = is$1;
	is$1.not.a = is$1.not.an = is$1.not;
	var is_1 = is$1;

	var toArgs = Array.prototype.slice;
	var reFn = /\bFunction\b/;

	var as$1 = function as(expected, value) {
		var type = typify$1(expected, true);
		var args = toArgs.call(arguments, 2);
		var scope = args[0] || null;
		if (constructorOf$1(value) === Function && !reFn.test(type)) {
			value = value.apply(scope, args);
		}
		return is_1(type, value) ? value : undefined;
	};

	var stringify$1 = function stringify(value, space, replacer) {
		if (constructorOf$1(value) === RegExp || constructorOf$1(value) === Function) {
			return value.toString();
		}
		return JSON.stringify(value, replacer, space);
	};

	var as = as$1;
	var constructorNameOf = constructorNameOf$1;
	var constructorOf = constructorOf$1;
	var is = is_1;
	var name = name$1;
	var of = of$1;
	var toString_1 = toString_1$1;
	var stringify = stringify$1;
	var typify = typify$1;

	var index$2 = {
		as: as,
		constructorNameOf: constructorNameOf,
		constructorOf: constructorOf,
		is: is,
		name: name,
		of: of,
		toString: toString_1,
		stringify: stringify,
		typify: typify
	};

	var index = index$2;

	return index;

});
