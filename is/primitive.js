'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _internalEnvJs = require('../internal/env.js');

var OBJECT = _internalEnvJs.OBJECT;

var callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = primitive;
function primitive(value) {
  if (value === undefined || value === null) return true;
  if (callable(value.valueOf)) value = value.valueOf();
  if (callable(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === OBJECT) {
    return false;
  }
  return true;
}
