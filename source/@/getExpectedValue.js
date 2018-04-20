import callable from '../is/callable.js';
import ownValue from '../has/ownValue.js';
import slice from './slice.js';
import apply from './apply.js';

export default function getExpectedValue(expected, value, args) {
	if (callable(value) && (expected === Function || ownValue(expected, Function)) === false) {
		const context = args ? args[0] : null;
		return apply(value, context, args, true);
	}
	return value;
}
