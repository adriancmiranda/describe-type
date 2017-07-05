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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.type = global.type || {}, global.type.as = factory());
}(this, (function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var is_arrayLike = function isArrayLike(value) {
		return (constructorOf(value) === Array || (!!value &&
			typeof value === 'object' && typeof value.length === 'number' &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		));
	};

	var objectToString = Object.prototype.toString;
	var reName$1 = /^.*function\s([^\s]*|[^(]*)\([^\x00]+/m;
	var reTrim = /\s+/g;

	var toString_1 = function toString(value, force) {
		if (value && value.constructor && force) {
			if (!value.constructor.name || value.constructor.name === 'Object') {
				return value.constructor.toString().replace(reName$1, '$1').replace(reTrim, '');
			}
			return value.constructor.name;
		}
		return objectToString.call(value).slice(8, -1);
	};

	var of = function typeOf(value) {
		var name = toString_1(value, true);
		if (value === Infinity || value === undefined || value === null || (name === 'Number' && isNaN(value))) {
			return String(value);
		}
		return name === 'Object' && is_arrayLike(value) ? 'Arguments' : name;
	};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var constructorNameOf = function constructorNameOf(value) {
		var name = of(value);
		return (name === 'Function' && Object(value).name) || name;
	};

	var varName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

	var name = function name(value, write) {
		var type = of(value);
		if (type === 'Object' || value === undefined || value === null) {
			return type;
		}
		return Object(value).name || (write && type === 'String' ?
			value.replace(varName, '_') :
			constructorNameOf(value)
		);
	};

	var typify = createCommonjsModule(function (module) {
	module.exports = function typify(expected, write) {
		var i = 0;
		if (constructorOf(expected) === Array && expected.length > 0) {
			while (i < expected.length) {
				expected[i] = module.exports(expected[i], write);
				i += 1;
			}
			return expected.join('|');
		}
		return name(expected, write);
	};
	});

	var is_buffer = function isBuffer(value) {
		try {
			return constructorOf(value) === Buffer;
		} catch (err) {
			return false;
		}
	};

	function is(expected, value) {
		return new RegExp('(' + typify(expected, true) + ')').test(of(value));
	}

	is.not = function isnt(expected, value) {
		return !is(expected, value);
	};

	is.not.buffer = function isntBuffer(value) {
		return !is_buffer(value);
	};

	is.not.arrayLike = function isntArrayLike(value) {
		return !is_arrayLike(value);
	};

	is.buffer = is_buffer;
	is.arrayLike = is_arrayLike;
	is.a = is.an = is;
	is.not.a = is.not.an = is.not;
	var is_1 = is;

	var toArgs = Array.prototype.slice;
	var reFn = /\bFunction\b/;

	var as = function as(expected, value) {
		var type = typify(expected, true);
		var args = toArgs.call(arguments, 2);
		var scope = args[0] || null;
		if (constructorOf(value) === Function && !reFn.test(type)) {
			value = value.apply(scope, args);
		}
		return is_1(type, value) ? value : undefined;
	};

	return as;

})));
