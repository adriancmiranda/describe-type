import { reIsHex } from '../@/patterns.js';
import string from './string/string.js';

export default function hex(value) {
	return string(value) && reIsHex.test(value);
}
