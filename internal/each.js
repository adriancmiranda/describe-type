/* eslint-disable no-restricted-syntax */
const arraylike = require('../is/arraylike/arraylike.js');
const eachProperty = require('./eachProperty.js');
const eachValue = require('./eachValue.js');

/**
 *
 * @function
 * @param {any} value
 * @param {Function} cmd
 * @param {Object} context
 * @param {Boolean} keepReverseOrGetInheritedProps
 * @returns {?}
 */
module.exports = function each(value, cmd, context, keepReverseOrGetInheritedProps) {
	if (arraylike(value)) return eachValue(value, cmd, context, keepReverseOrGetInheritedProps);
	return eachProperty(value, cmd, context, keepReverseOrGetInheritedProps);
}
