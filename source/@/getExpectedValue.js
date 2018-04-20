import callable from '../is/callable.js';
import ownValue from '../has/ownValue.js';
import slice from './slice.js';
import apply from './apply.js';

export default function getExpectedValue(expected, value) {
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		const args = slice(arguments, 2);
		return apply(value, args[0], args, true);
	}
	return value;
}
