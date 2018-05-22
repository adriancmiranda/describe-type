const { objectHasOwnProperty } = require('../internal/built-in.js');

/**
 *
 * @function
 * @memberof has
 * @param {Object|Function} context
 * @param {any} key
 * @returns {Boolean}
 */
module.exports = function ownProperty(context, key) {
	if (context === undefined || context === null) return false;
	return objectHasOwnProperty.call(context, key);
}
