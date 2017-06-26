/**
 * /     '      /  /
 * /__      ___ (  /
 * \--`-'-|`---\ |
 * |' _/   ` __/ /
 * '._  W    ,--'
 * |_:_._/
 * 
 * ~ describe-type v0.1.0
 *
 * @moment Monday, June 26, 2017 7:21 PM
 * @commit 206b51b991546cfe37a729828e9266a1534512be
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.type = global.type || {}, global.type.typify = factory());
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

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
		const type = Object.prototype.toString.call(value).slice(8, -1);
		const name = type === 'Object' && Object(value.constructor).name;
		const buffer = type === 'Uint8Array' && is_buffer(value) && 'Buffer';
		return name || buffer || type;
	};

	var constructorNameOf = function constructorNameOf(value) {
		const name = of(value);
		return (name === 'Function' && Object(value).name) || name;
	};

	const varName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

	var name = function name(value, write) {
		const type = of(value);
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

	return typify;

})));
