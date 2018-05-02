'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _internalEnvJs = require('../internal/env.js');

var FUNCTION = _internalEnvJs.FUNCTION;


/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = callable;
function callable(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === FUNCTION;
}
