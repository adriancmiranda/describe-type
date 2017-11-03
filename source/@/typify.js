import name from './name';
import arraylike from '../is/iterable/arraylike.js';

export default function typify(expected, write) {
	if (arraylike(expected) && expected.length > 0) {
		let i = expected.length;
		while (i -= 1) {
			expected[i] = typify(expected[i], write);
		}
		return expected.join('|');
	}
	return name(expected, write);
}
