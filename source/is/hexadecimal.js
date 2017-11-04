import { reIsHexadecimal } from '../@/patterns.js';
import string from './string.js';

export default function hexadecimal(value) {
	return string(value) && reIsHexadecimal.test(value);
}
