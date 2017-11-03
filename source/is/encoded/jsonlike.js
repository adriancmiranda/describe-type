import { reIsJsonStart, reEndsWithBracket, reEndsWithBrace } from '../../@/patterns.js';
import string from '../shortcuts/string.js';

export default function jsonlike(value) {
	if (string(value)) {
		const start = value.match(reIsJsonStart);
		return !!(start && reIsJsonEnds[start[0]].test(value));
	}
	return false;
}
