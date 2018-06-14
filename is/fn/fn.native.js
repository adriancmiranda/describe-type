const { reIsNativeFn } = require('../../internal/patterns.js');
const fn = require('./fn.js');

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
module.exports = function nativeFunction(value) {
	return fn(value) && reIsNativeFn.test(value.toString());
}
