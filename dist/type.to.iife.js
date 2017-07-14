/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.3.0
 * 
 * @moment Friday, July 14, 2017 5:03 AM
 * @commit 736a15a72797c28208b648156fe8ced65f8891c0
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
this.type = this.type || {};
this.type.to = (function () {
	'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var is_arraylike = function isArraylike(value) {
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
		return name === 'Object' && is_arraylike(value) ? 'Arguments' : name;
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

	var jsonStart = /^\[|^\{(?!\{)/;
	var jsonEnds = {
		'[': /\]$/,
		'{': /\}$/,
	};

	var is_json = function isJson(value) {
		if (constructorOf(value) === String) {
			var start = value.match(jsonStart);
			return !!(start && jsonEnds[start[0]].test(value));
		}
		return false;
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

	is.not.arraylike = function isntArraylike(value) {
		return !is_arraylike(value);
	};

	is.numeric = function isNumeric(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	};

	is.not.numeric = function isntNumeric(value) {
		return !is.numeric(value);
	};

	is.int = function isInt(value) {
		return parseFloat(value, 10) === parseInt(value, 10);
	};

	is.not.int = function isntInt(value) {
		return !is.int(value);
	};

	is.uint = function isUint(value) {
		return is.int(value) && value >= 0;
	};

	is.not.uint = function isntUint(value) {
		return !is.uint(value);
	};

	is.primitive = function isPrimitive(value) {
		return typeof value === 'function' || value !== Object(value);
	};

	is.not.primitive = function isntPrimitive(value) {
		return !is.primitive(value);
	};

	is.not.json = function isntJson(value) {
		return !is_json(value);
	};

	is.buffer = is_buffer;
	is.arraylike = is_arraylike;
	is.json = is_json;
	is.a = is.an = is;
	is.not.a = is.not.an = is.not;
	var is_1 = is;

	var to = {};

	to.string = function stringify(value, space, replacer) {
		if (is_1([RegExp, Function], value)) {
			return value.toString();
		}
		return JSON.stringify(value, replacer, space);
	};

	to.int = function toInt(value) {
		return 0 | parseInt(value, 10);
	};

	to.uint = function toUint(value) {
		value = to.int(value);
		return value < 0 ? 0 : value;
	};

	to.float = function toFloat(value) {
		value = parseFloat(value, 10);
		return is_1.numeric(value) ? value : 0;
	};

	to.bool = function toBoolean(value) {
		if (is_1(String, value)) {
			return /^true|[1-9]+$/gi.test(value);
		}
		return !!value;
	};

	var to_1 = to;

	return to_1;

}());
