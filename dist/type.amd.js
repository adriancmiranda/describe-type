/*!
 * 
 * ~~~~ describe-type v0.3.0
 * 
 * @commit b214cdb480d461291174984885bd0a0615bc8abc
 * @moment Sunday, August 6, 2017 6:18 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-20173
 */
define(function () { 'use strict';

	var constructorOf$1 = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var arraylike = function isArraylike(value) {
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
		return name === 'Object' && arraylike(value) ? 'Arguments' : name;
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

	var is$1 = function is(expected, value) {
		return new RegExp(("(" + (typify$1(expected, true)) + ")")).test(of$1(value));
	};

	var toArgs = Array.prototype.slice;
	var reFn = /\bFunction\b/;

	var as$1 = function as(expected, value) {
		var type = typify$1(expected, true);
		var args = toArgs.call(arguments, 2);
		var scope = args[0] || null;
		if (constructorOf$1(value) === Function && !reFn.test(type)) {
			value = value.apply(scope, args);
		}
		return is$1(type, value) ? value : undefined;
	};

	var numeric = function isNumeric(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	};

	var int_1 = function isInt(value) {
		return parseFloat(value, 10) === parseInt(value, 10);
	};

	var uint = function isUint(value) {
		return int_1(value) && value >= 0;
	};

	var primitive = function isPrimitive(value) {
		return typeof value === 'function' || value !== Object(value);
	};

	var buffer = function isBuffer(value) {
		try {
			return constructorOf$1(value) === Buffer;
		} catch (err) {
			return false;
		}
	};

	var jsonStart = /^\[|^\{(?!\{)/;
	var jsonEnds = {
		'[': /\]$/,
		'{': /\}$/,
	};

	var json = function isJson(value) {
		if (constructorOf$1(value) === String) {
			var start = value.match(jsonStart);
			return !!(start && jsonEnds[start[0]].test(value));
		}
		return false;
	};

	is$1.numeric = numeric;
	is$1.int = int_1;
	is$1.uint = uint;
	is$1.primitive = primitive;
	is$1.buffer = buffer;
	is$1.arraylike = arraylike;
	is$1.json = json;
	is$1.a = is$1.an = is$1;

	is$1.not = function isnt(expected, value) {
		return !is$1(expected, value);
	};

	is$1.not.buffer = function isntBuffer(value) {
		return !is$1.buffer(value);
	};

	is$1.not.arraylike = function isntArraylike(value) {
		return !is$1.arraylike(value);
	};

	is$1.not.numeric = function isntNumeric(value) {
		return !is$1.numeric(value);
	};

	is$1.not.int = function isntInt(value) {
		return !is$1.int(value);
	};

	is$1.not.uint = function isntUint(value) {
		return !is$1.uint(value);
	};

	is$1.not.primitive = function isntPrimitive(value) {
		return !is$1.primitive(value);
	};

	is$1.not.json = function isntJson(value) {
		return !is$1.json(value);
	};

	is$1.not.a = is$1.not.an = is$1.not;
	var index$4 = is$1;

	var stringToBoolean = /^true|[1-9]+$/gi;
	var to$1 = {};

	to$1.string = function stringify(value, space, replacer) {
		if (is$1([RegExp, Function], value)) {
			return value.toString();
		}
		return JSON.stringify(value, replacer, space);
	};

	to$1.int = function toInt(value) {
		return 0 | parseInt(value, 10);
	};

	to$1.uint = function toUint(value) {
		value = to$1.int(value);
		return value < 0 ? 0 : value;
	};

	to$1.float = function toFloat(value) {
		value = parseFloat(value, 10);
		return numeric(value) ? value : 0;
	};

	to$1.bool = function toBoolean(value) {
		if (is$1(String, value)) {
			return stringToBoolean.test(value);
		}
		return !!value;
	};

	var to_1 = to$1;

	var as = as$1;
	var constructorNameOf = constructorNameOf$1;
	var constructorOf = constructorOf$1;
	var is = index$4;
	var name = name$1;
	var of = of$1;
	var to = to_1;
	var toString_1 = toString_1$1;
	var typify = typify$1;

	var index$2 = {
		as: as,
		constructorNameOf: constructorNameOf,
		constructorOf: constructorOf,
		is: is,
		name: name,
		of: of,
		to: to,
		toString: toString_1,
		typify: typify
	};

	var index = index$2;

	return index;

});
