'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var constructorOf = require('../internal/constructorOf.js');

var _internalEnvJs = require('../internal/env.js');

var STRING = _internalEnvJs.STRING;
var NUMBER = _internalEnvJs.NUMBER;
var SYMBOL = _internalEnvJs.SYMBOL;
var FUNCTION = _internalEnvJs.FUNCTION;


/**
 *
 * @function
 * @memberof is
 * @param {Function} expect
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = type;
function type(expected, value) {
	if (value === undefined || value === null) return value === expected;
	if (expected === undefined || expected === null) return expected === value;
	if (value === true || value === false) return expected === Boolean;
	var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	if (type === STRING) return expected === String;
	if (type === NUMBER) return expected === Number;
	if (type === SYMBOL) return expected === Symbol;
	if (expected === Function) return type === FUNCTION;
	if (value instanceof Array) return expected === Array;
	if (value instanceof RegExp) return expected === RegExp;
	return constructorOf(value) === expected;
}
