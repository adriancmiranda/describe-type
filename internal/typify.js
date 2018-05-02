'use strict';

var arraylike = require('../is/arraylike/arraylike.js');

var string = require('../is/string/string.js');

var name = require('./name.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Array}
 */
module.exports = typify;
function typify(expected, write) {
  if (string(expected) === false && arraylike(expected) && expected.length > 0) {
    for (var i = expected.length - 1; i > -1; i -= 1) {
      expected[i] = name(expected[i], write);
    }
    return expected.join('|');
  }
  return name(expected, write);
}
