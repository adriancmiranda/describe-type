import test from 'ava';
import safeRegex from 'safe-regex';
import * as describeType from '../index.next';
import * as patterns from './patterns.next';

test('detect potentially catastrophic exponential-time regular expressions', (t) => {
	// t.true(safeRegex(patterns.reIsBase64), 'reIsBase64 should be safe');
	// t.true(safeRegex(patterns.reIsHexadecimal), 'reIsHexadecimal should be safe');
	// t.true(safeRegex(patterns.reRegExpFlags), 'reRegExpFlags should be safe');
	// t.true(safeRegex(patterns.reRegExp), 'reRegExp should be safe');
	t.true(safeRegex(patterns.reFunctionName), 'reFunctionName should be safe');
	t.true(safeRegex(patterns.reIsNativeFn), 'reIsNativeFn should be safe');
	t.true(safeRegex(patterns.reStringToBoolean), 'reStringToBoolean should be safe');
	t.true(safeRegex(patterns.reToPropName), 'reToPropName should be safe');
	t.true(safeRegex(patterns.reIsHex), 'reIsHex should be safe');
	t.true(safeRegex(patterns.reIsJsonStart), 'reIsJsonStart should be safe');
	t.true(safeRegex(patterns.reEndsWithBracket), 'reEndsWithBracket should be safe');
	t.true(safeRegex(patterns.reEndsWithBrace), 'reEndsWithBrace should be safe');
});
