/*!
 * 
 * ~~~~ describe-type v0.3.0
 * 
 * @commit 5f7470ab91b522af395456371d383c1bb2331705
 * @moment Sunday, August 6, 2017 7:39 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-20173
 */
define(function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var arraylike = function isArraylike(value) {
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
		return name === 'Object' && arraylike(value) ? 'Arguments' : name;
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

	var is = function is(expected, value) {
		return new RegExp(("(" + (typify(expected, true)) + ")")).test(of(value));
	};

	var toArgs = Array.prototype.slice;
	var reFn = /\bFunction\b/;

	var as = function as(expected, value) {
		var type = typify(expected, true);
		var args = toArgs.call(arguments, 2);
		var scope = args[0] || null;
		if (constructorOf(value) === Function && !reFn.test(type)) {
			value = value.apply(scope, args);
		}
		return is(type, value) ? value : undefined;
	};

	return as;

});
