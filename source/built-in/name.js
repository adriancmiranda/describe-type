import { reToPropName } from '../@/patterns.js';
import string from '../is/string.js';
import object from '../is/object.js';
import constructorNameOf from './constructorNameOf.js';
import typeOf from './typeOf.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @param {Boolean} write
 * @returns {String}
 */
export default function name(value, write) {
	if (value == null || object(value)) {
		return typeOf(value);
	}
	return value.name || (write &&
		string(value) ? value.replace(reToPropName, '_') : constructorNameOf(value)
	);
}
