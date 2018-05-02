'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _internalEnvJs = require('../../internal/env.js');

var OBJECT = _internalEnvJs.OBJECT;
var NUMBER = _internalEnvJs.NUMBER;

var array = require('../array/array.js');

var string = require('../string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = arraylike;
function arraylike(value) {
  return array(value) || string(value) || !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === OBJECT && _typeof(value.length) === NUMBER && (value.length === 0 || value.length > 0 && value.length - 1 in value);
}
