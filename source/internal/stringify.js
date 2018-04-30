// TODO: to implement
import type from '../is/type.js';
import asType from '../as/as.type.js';
import startsWith from '../polyfill/String.prototype.startsWith.js';
import { UNDEFINED, NULL, PREFIX_SEAL } from '../internal/env.js';

export default function stringify(value, replacer, space) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	let seal = asType(String, value.toString, value);
	if (startsWith(seal, PREFIX_SEAL)) seal = '';
	return seal || JSON.stringify(value, replacer, space);
}
