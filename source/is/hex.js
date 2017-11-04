import { reIsHex } from '../@/patterns.js';

export default function hex(value) {
	return typeof value === 'string' && reIsHex.test(value);
}
