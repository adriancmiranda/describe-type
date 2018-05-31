import { UNDEFINED, NULL } from '../constants.next.js';
import { symbolToString } from '../built-in.next.js';
import string from '../../is/string/string.next.js';
import array from '../../is/array/array.next.js';
import object from '../../is/object/object.next.js';
import symbol from '../../is/symbol.next.js';
import stringifyArray from './stringify.array.next.js';
import stringifyObject from './stringify.object.next.js';

/**
 *
 * @param {any} value - .
 * @returns {String}
 */
export default function stringifyValue(value) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	if (string(value)) return value;
	if (symbol(value)) return symbolToString ? symbolToString.call(value) : '';
	if (array(value)) return stringifyArray(value);
	if (object(value)) return stringifyObject(value);
	const result = String(value);
	return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}
