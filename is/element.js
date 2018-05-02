'use strict';

var _internalEnvJs = require('../internal/env.js');

var env = _internalEnvJs.env;

var callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = element;
function element(value) {
  if (value === undefined || value === null) return false;
  if (env.window === undefined || env.window === null) return false;
  return callable(env.window.HTMLElement) && value instanceof env.window.HTMLElement && value.nodeType === 1;
}
