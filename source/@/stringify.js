// TODO: to implement
import type from '../is/type.js';
import asType from '../as/as.type.js';
import startsWith from './startsWith.js';

export default function stringify(value, space, replacer) {
	if (value == null) return String(value);
	let seal = asType(String, value.toString, value);
	if (startsWith(seal, '[object ')) seal = '';
	return seal || JSON.stringify(value, replacer, space);
}
