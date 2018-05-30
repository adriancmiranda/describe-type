import string from '../is/string/string.next.js';
import object from '../is/object/object.next.js';
import constructorNameOf from './constructorNameOf.next.js';
import { reToPropName } from './patterns.next.js';
import typeOf from './typeOf.next.js';

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
