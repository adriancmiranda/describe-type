import { reIsRGBA } from '../internal/patterns.next.js';
import string from './string/string.next.js';

export default function rgba(value) {
	return string(value) && reIsRGBA.test(value);
}
