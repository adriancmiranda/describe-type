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
 * @moment Wednesday, June 28, 2017 9:59 PM
 * @commit 50bd5bf95d55489029750c3c2a243362fc690e65
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
define(function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var is_buffer = function isBuffer(value) {
		try {
			return constructorOf(value) === Buffer;
		} catch (err) {
			return false;
		}
	};

	var of = function typeOf(value) {
		var type = Object.prototype.toString.call(value).slice(8, -1);
		var name = /^(Object|Error|Function)$/.test(type) && Object(value.constructor).name;
		var nil = type === 'Number' && !isFinite(value) && value.toString();
		var buffer = type === 'Uint8Array' && is_buffer(value) && 'Buffer';
		return name || nil || buffer || type;
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
		if (Array.isArray(expected) && expected.length > 0) {
			return expected.map(function typeMap(val) {
				return module.exports(val, write);
			}).join('|');
		}
		return name(expected, write);
	};
	});

	/* eslint-disable no-multi-assign */




	function is(expected, value, ignoreCase) {
		return new RegExp('(' +
			typify(expected, true) +
		')', ignoreCase ? 'i' : undefined).test(of(value));
	}

	is.not = function isnt(expected, value, ignoreCase) {
		return !is(expected, value, ignoreCase);
	};

	is.not.buffer = function isntBuffer(value) {
		return !is_buffer(value);
	};

	is.buffer = is_buffer;
	is.a = is.an = is;
	is.not.a = is.not.an = is.not;
	var is_1 = is;

	var as = function as(expected, value, ignoreCase) {
		var type = typify(expected, true);
		var fn = new RegExp('\\bFunction\\b', ignoreCase ? 'i' : undefined);
		if (constructorOf(value) === Function && !fn.test(type)) {
			value = value.apply(null, Array.prototype.slice.call(arguments, 3));
		}
		return is_1(type, value, ignoreCase) ? value : undefined;
	};

	return as;

});
