import test from 'ava';
import * as describeType from '../../../source';
import uintOf from '../../../source/built-in/uintOf';

test('describeType.uintOf exposure', (t) => {
	t.is(toString.call(describeType.uintOf), '[object Function]', 'should be a function');
});

test('uintOf exposure', (t) => {
	t.is(toString.call(uintOf), '[object Function]', 'should be a function');
});

// test('', (t) => {
// 	t.is(uintOf(-1.2), 0);
// });

// test('', (t) => {
// 	t.is(uintOf(1.2), 1);
// });

// test('', (t) => {
// 	t.is(uintOf(1), 1);
// });
