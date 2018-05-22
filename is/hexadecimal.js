const { reIsHexadecimal } = require('../internal/patterns.js');
const string = require('./string/string.js');

module.exports = function hexadecimal(value) {
	return string(value) && reIsHexadecimal.test(value);
}
