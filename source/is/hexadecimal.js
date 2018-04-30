import { reIsHexadecimal } from '../internal/patterns.js';
import string from './string/string.js';

export default function hexadecimal(value) {
	return string(value) && reIsHexadecimal.test(value);
}
