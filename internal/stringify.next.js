import { UNDEFINED, NULL } from './constants.next.js';
import reduce from '../ponyfill/Array.prototype.reduce.next.js';
import keys from '../ponyfill/Object.keys.next.js';
import string from '../is/string/string.next.js';
import array from '../is/array/array.next.js';
import object from '../is/object/object.next.js';
import symbol from '../is/symbol.next.js';

function stringifyArray(list) {
	const size = list.length - 1;
	return reduce(list, (accumulator, item, index) => {
		const last = index === size;
		accumulator += last ? `${stringify(item)}]` : `${stringify(item)},`;
		return accumulator;
	}, '[');
}

function stringifyHash(hash) {
	const list = keys(hash);
	const size = list.length - 1;
	return reduce(list, (accumulator, key, index) => {
		const last = index === size;
		const value = stringify(hash[key]);
		const pair = `${key}:${value}`;
		accumulator += last ? `${pair}}` : `${pair},`;
		return accumulator;
	}, '{');
}

export default function stringify(value) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	if (string(value)) return value;
	if (symbol(value)) return symbolToString ? symbolToString.call(value) : '';
	if (array(value)) return stringifyArray(value);
	if (object(value)) return stringifyHash(value);
	const result = String(value);
	return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}
