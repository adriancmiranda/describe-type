// TODO: to implement
import { UNDEFINED, NULL, PREFIX_SEAL } from '../internal/constants.next.js';
import startsWith from '../polyfill/String.prototype.startsWith.next.js';
import type from '../is/type.next.js';
import asType from '../as/as.type.next.js';

export default function stringify(value, replacer, space) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	let seal = asType(String, value.toString, value);
	if (startsWith(seal, PREFIX_SEAL)) seal = '';
	return seal || JSON.stringify(value, replacer, space);
}