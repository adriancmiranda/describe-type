import { reIsHex } from '../internal/patterns.next.js';
import string from './string/string.next.js';

export default function hex(value) {
	return string(value) && reIsHex.test(value);
}
