'use strict';

var mod = require('../internal/mod.js');

var asType = require('../as/as.type.js');

/**
 *
 * @function
 * @memberof utility
 * @param {String} value -
 * @param {String} search -
 * @param {uint} position -
 * @returns {Boolean}
 */
module.exports = startsWith;
function startsWith(value, search, position) {
  var str = asType(String, value) || '';
  var startIndex = mod(position, 0, str.length);
  return str.substr(startIndex, search.length) === search;
}
