/* eslint-disable no-restricted-syntax */
import arraylike from '../is/arraylike/arraylike.next.js';
import eachProperty from './eachProperty.next.js';
import eachValue from './eachValue.next.js';

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
