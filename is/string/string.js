'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _internalEnvJs = require('../../internal/env.js');

var STRING = _internalEnvJs.STRING;


/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = string;
function string(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === STRING || value instanceof String;
}
