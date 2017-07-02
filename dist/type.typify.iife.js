/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.2.1
 * 
 * @moment Saturday, July 1, 2017 10:58 PM
 * @commit 78192f263688e701fe33161fc0b480afdbf77f3d
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
this.type = this.type || {};
this.type.typify = (function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/* eslint-disable no-control-regex */
	var objectToString = Object.prototype.toString;
	var reName$1 = /^.*function\s([^\s]*|[^(]*)\([^\x00]+/m;
	var reTrim = /^\s+|\s$/g;

	var toString_1 = function toString(value, force) {
		if (value && value.constructor && force) {
			if (!value.constructor.name || value.constructor.name === 'Object') {
				return value.constructor.toString().replace(reName$1, '$1').replace(reTrim, '');
			}
			return value.constructor.name;
		}
		return objectToString.call(value).slice(8, -1);
	};

	var is_arrayLike = function isArrayLike(value) {
		return (toString_1(value) === 'Array' || (!!value &&
			typeof value === 'object' && typeof value.length === 'number' &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		));
	};

	/* eslint-disable vars-on-top */



	var of = function typeOf(value) {
		var name = toString_1(value, true);
		if (value !== Infinity && value !== undefined && value !== null) {
			var type = name === 'Number' && !isFinite(value) ? value.toString() : name;
			var definition = (type === 'Object' && is_arrayLike(value) ? 'Arguments' : type);
			var args = definition === 'Arguments' && definition;
			return String(args || type || name || definition);
		}
		return String(value);
	};

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
		if (Array.isArray(expected) && expected.length > 0) {
			while (i < expected.length) {
				expected[i] = module.exports(expected[i], write);
				i += 1;
			}
			return expected.join('|');
		}
		return name(expected, write);
	};
	});

	return typify;

}());
