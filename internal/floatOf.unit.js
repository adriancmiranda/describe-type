import test from 'ava';
import * as describeType from '..';
import floatOf from '../../../internal/floatOf';

test('describeType.floatOf exposure', (t) => {
	t.is(toString.call(describeType.floatOf), '[object Function]', 'should be a function');
});

test('floatOf exposure', (t) => {
	t.is(toString.call(floatOf), '[object Function]', 'should be a function');
});

// test('', (t) => {
// 	t.is(floatOf('1'), 1);
// });

// test('', (t) => {
// 	t.is(floatOf('1.2'), 1.2);
// });
