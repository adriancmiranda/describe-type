'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reToPropName = _internalPatternsJs.reToPropName;

var string = require('../is/string/string.js');

var object = require('../is/object/object.js');

var constructorNameOf = require('./constructorNameOf.js');

var typeOf = require('./typeOf.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @param {Boolean} write
 * @returns {String}
 */
module.exports = name;
function name(value, write) {
  if (value === undefined || value === null || object(value)) {
    return typeOf(value);
  }
  return value.name || (write && string(value) ? value.replace(reToPropName, '_') : constructorNameOf(value));
}
