import ownProperty from './ownProperty.js';
import ownValue from './ownValue.js';
import array from '../is/array.js';

/**
 *
 * @function
 * @memberof has
 * @param {Array|String|Object|Function} context
 * @param {any} value
 * @returns {Boolean}
 */
export default function own(context, value) {
	if (array(context)) return ownValue(context, value);
	return ownProperty(context, value);
}
