/* eslint-disable no-restricted-syntax */
import arraylike from '../is/arraylike/arraylike.js';
import eachProperty from './eachProperty.js';
import eachValue from './eachValue.js';

/**
 *
 * @function
 * @param {any} value
 * @param {Function} cmd
 * @param {Object} context
 * @param {Boolean} keepReverseOrGetInheritedProps
 * @returns {?}
 */
export default function each(value, cmd, context, keepReverseOrGetInheritedProps) {
	if (arraylike(value)) return eachValue(value, cmd, context, keepReverseOrGetInheritedProps);
	return eachProperty(value, cmd, context, keepReverseOrGetInheritedProps);
}
