'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _internalEnvJs = require('../internal/env.js');

var NUMBER = _internalEnvJs.NUMBER;


/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = number;
function number(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === NUMBER || value instanceof Number;
}
