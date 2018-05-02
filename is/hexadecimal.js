'use strict';

var _internalPatternsJs = require('../internal/patterns.js');

var reIsHexadecimal = _internalPatternsJs.reIsHexadecimal;

var string = require('./string/string.js');

module.exports = hexadecimal;
function hexadecimal(value) {
	return string(value) && reIsHexadecimal.test(value);
}
