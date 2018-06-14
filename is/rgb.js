const { reIsRGB } = require('../internal/patterns.js');
const string = require('./string/string.js');

module.exports = function rgb(value) {
	return string(value) && reIsRGB.test(value);
}
