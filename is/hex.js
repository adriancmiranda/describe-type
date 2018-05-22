const { reIsHex } = require('../internal/patterns.js');
const string = require('./string/string.js');

module.exports = function hex(value) {
	return string(value) && reIsHex.test(value);
}
