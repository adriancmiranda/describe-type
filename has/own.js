const ownProperty = require('./ownProperty.js');
const ownValue = require('./ownValue.js');
const array = require('../is/array/array.js');

/**
 *
 * @function
 * @memberof has
 * @param {Array|String|Object|Function} context
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function own(context, value) {
	if (array(context)) return ownValue(context, value);
	return ownProperty(context, value);
}
