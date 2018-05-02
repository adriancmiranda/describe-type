'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reIsHex = _internalPatternsJs.reIsHex;

var string = require('./string/string.js');

module.exports = hex;
function hex(value) {
	return string(value) && reIsHex.test(value);
}
