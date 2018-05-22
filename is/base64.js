const { reIsBase64 } = require('../internal/patterns.js');
const string = require('./string/string.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function base64(value) {
	return string(value) && reIsBase64.test(value);
}
