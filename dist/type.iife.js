/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.1.1
 * 
 * @moment Tuesday, June 27, 2017 2:09 AM
 * @commit 4e91e8c11169f4b82c7f1c1492dc75e27ff72250
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
var type = (function () {
	'use strict';

	var constructorOf$1 = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var is_buffer = function isBuffer(value) {
		try {
			return constructorOf$1(value) === Buffer;
		} catch (err) {
			return false;
		}
	};

	var of$1 = function typeOf(value) {
		var type = Object.prototype.toString.call(value).slice(8, -1);
		var name = type === 'Object' && Object(value.constructor).name;
		var buffer = type === 'Uint8Array' && is_buffer(value) && 'Buffer';
		return name || buffer || type;
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
		if (Array.isArray(expected) && expected.length > 0) {
			return expected.map(function typeMap(val) {
				return module.exports(val, write);
			}).join('|');
		}
		return name$1(expected, write);
	};
	});

	/* eslint-disable no-multi-assign */




	function is$1(expected, value, ignoreCase) {
		return new RegExp('(' +
			typify$1(expected, true) +
		')', ignoreCase ? 'i' : undefined).test(of$1(value));
	}

	is$1.not = function isnt(expected, value, ignoreCase) {
		return !is$1(expected, value, ignoreCase);
	};

	is$1.not.buffer = function isntBuffer(value) {
		return !is_buffer(value);
	};

	is$1.buffer = is_buffer;
	is$1.a = is$1.an = is$1;
	is$1.not.a = is$1.not.an = is$1.not;
	var is_1 = is$1;

	var as$1 = function as(expected, value, ignoreCase) {
		var type = typify$1(expected, true);
		var fn = new RegExp('\\bFunction\\b', ignoreCase ? 'i' : undefined);
		if (constructorOf$1(value) === Function && !fn.test(type)) {
			value = value.apply(null, Array.prototype.slice.call(arguments, 3));
		}
		return is_1(type, value, ignoreCase) ? value : undefined;
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
	var stringify = stringify$1;
	var typify = typify$1;

	var index$2 = {
		as: as,
		constructorNameOf: constructorNameOf,
		constructorOf: constructorOf,
		is: is,
		name: name,
		of: of,
		stringify: stringify,
		typify: typify
	};

	var index = index$2;

	return index;

}());
