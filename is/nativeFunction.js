const { reIsNativeFn } = require('../internal/patterns.js');
const callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = function nativeFunction(value) {
	return callable(value) && reIsNativeFn.test(value.toString());
}
