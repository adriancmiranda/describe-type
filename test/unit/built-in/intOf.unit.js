import test from 'ava';
import * as describeType from '../../../source';
import intOf from '../../../source/built-in/intOf';

test('describeType.intOf exposure', (t) => {
	t.is(toString.call(describeType.intOf), '[object Function]', 'should be a function');
});

test('intOf exposure', (t) => {
	t.is(toString.call(intOf), '[object Function]', 'should be a function');
});

// test('', (t) => {
// 	t.is(intOf(-1.2), -1);
// });

// test('', (t) => {
// 	t.is(intOf(1.2), 1);
// });

// test('', (t) => {
// 	t.is(intOf(1), 1);
// });
