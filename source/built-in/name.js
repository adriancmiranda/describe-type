import { reToPropName } from '../internal/patterns.js';
import string from '../is/string/string.js';
import object from '../is/object/object.js';
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
	if (value === undefined || value === null || object(value)) {
		return typeOf(value);
	}
	return value.name || (write &&
		string(value) ? value.replace(reToPropName, '_') : constructorNameOf(value)
	);
}
