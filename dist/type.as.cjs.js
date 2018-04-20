/*!
 * 
 * ~~~~ describe-type v0.7.0
 * 
 * @commit 1d5d8c6ec81eb62639d094020fb3b9cb8e183ccd
 * @moment Friday, April 20, 2018 6:19 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021 Adrian C. Miranda
 */
'use strict';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function callable(value) {
	return typeof value === 'function';
}

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function array(value) {
	if (value == null) { return false; }
	return value.constructor === Array;
}

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function string(value) {
	return typeof value === 'string' || value instanceof String;
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
		(!!value && typeof value === 'object' && typeof value.length === 'number') &&
		(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
	);
}

/**
 *
 * @function
 * @memberof has
 * @param {String|Array} context
 * @param {any} value
 * @returns {Boolean}
 */
function ownValue(context, value) {
	if (arraylike(context) === false) { return false; }
	for (var id = context.length - 1; id > -1; id -= 1) {
		if (value === context[id]) {
			return true;
		}
	}
	return false;
}

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */

/* eslint-disable no-nested-ternary */

/**
 *
 * @param {Function} cmd - .
 * @param {any} context - .
 * @returns {any}
 */
function apply(cmd, context, args, blindly) {
	try {
		var $ = arraylike(args) ? args : [];
		switch ($.length) {
			case 0: return cmd.call(context);
			case 1: return cmd.call(context, $[0]);
			case 2: return cmd.call(context, $[0], $[1]);
			case 3: return cmd.call(context, $[0], $[1], $[2]);
			case 4: return cmd.call(context, $[0], $[1], $[2], $[3]);
			case 5: return cmd.call(context, $[0], $[1], $[2], $[3], $[4]);
			case 6: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5]);
			case 7: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6]);
			case 8: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7]);
			case 9: return cmd.call(context, $[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8]);
			default: return cmd.apply(context, $);
		}
	} catch (err) {
		if (blindly) { return err; }
		throw err;
	}
}

function getExpectedValue(expected, value, args) {
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		var context = args ? args[0] : null;
		return apply(value, context, args, true);
	}
	return value;
}

/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
function type(expected, value) {
	if (expected == null || value == null) { return value === expected; }
	if (value.constructor === expected) { return true; }
	if (value.constructor === undefined) { return expected === Object; }
	return expected === Function && (
		value.constructor.name === 'GeneratorFunction' ||
		value.constructor.name === 'AsyncFunction'
	);
}

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function asA(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return type(expected, value) ? value : arguments[2];
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
	if (expected == null) { return expected === value; }
	if (expected.constructor === Array && expected.length > 0) {
		for (var i = expected.length - 1; i > -1; i -= 1) {
			if (type(expected[i], value)) { return true; }
		}
	}
	return type(expected, value);
}

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function asAny(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return any(expected, value) ? value : arguments[2];
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
	if (expected == null) { return expected === value; }
	if (expected.constructor === Array && expected.length > 0) {
		for (var i = expected.length - 1; i > -1; i -= 1) {
			var ctor = expected[i];
			if (ctor === Number) { return type(ctor, value); } // ... should normalize?!
			if (callable(ctor) && value instanceof ctor) { return true; }
		}
	}
	if (expected === Number) { return type(expected, value); } // ... should normalize?!
	return callable(expected) && value instanceof expected;
}

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function asInstanceOf(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	return instanceOf(expected, value) ? value : arguments[2];
}

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

/**
 *
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
function asVectorOf(expected, value) {
	value = getExpectedValue(expected, value, arguments);
	if (expected == null) { return vector(expected, value); }
	if (expected.constructor === Array && expected.length > 0) {
		for (var i = expected.length - 1; i > -1; i -= 1) {
			if (vector(expected[i], value)) { return value; }
		}
		return arguments[2];
	}
	return vector(expected, value) ? value : arguments[2];
}

asA.a = asA.an = asA.type = asA;
asA.any = asAny;
asA.instanceOf = asInstanceOf;
asA.vectorOf = asVectorOf;

module.exports = asA;
