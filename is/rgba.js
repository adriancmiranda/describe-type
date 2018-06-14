const { reIsRGBA } = require('../internal/patterns.js');
const string = require('./string/string.js');

module.exports = function rgba(value) {
	return string(value) && reIsRGBA.test(value);
}
