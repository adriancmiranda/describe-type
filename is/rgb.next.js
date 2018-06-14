import { reIsRGB } from '../internal/patterns.next.js';
import string from './string/string.next.js';

export default function rgb(value) {
	return string(value) && reIsRGB.test(value);
}
