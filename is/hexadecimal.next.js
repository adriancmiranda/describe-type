import { reIsHexadecimal } from '../internal/patterns.next.js';
import string from './string/string.next.js';

export default function hexadecimal(value) {
	return string(value) && reIsHexadecimal.test(value);
}
