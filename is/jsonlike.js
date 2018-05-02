'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reIsJsonStart = _internalPatternsJs.reIsJsonStart;
var reIsJsonEnds = _internalPatternsJs.reIsJsonEnds;

var string = require('./string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = jsonlike;
function jsonlike(value) {
  if (string(value)) {
    var start = value.match(reIsJsonStart);
    return !!(start && reIsJsonEnds[start[0]].test(value));
  }
  return false;
}
