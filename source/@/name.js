import typeOf from './typeOf.js';
import string from '../is/shortcuts/string.js';
import object from '../is/shortcuts/object.js';
import constructorNameOf from './constructorNameOf.js';
import { reToPropName } from './patterns.js';

/**
 *
 * @function
 * @memberof of
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
