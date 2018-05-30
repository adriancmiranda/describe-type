import test from 'ava';
import * as describeType from '../index.next';
import floatOf from './floatOf.next';

test('describeType.floatOf exposure', (t) => {
	t.is(toString.call(describeType.floatOf), '[object Function]', 'should be a function');
});

test('floatOf exposure', (t) => {
	t.is(toString.call(floatOf), '[object Function]', 'should be a function');
});

test('string: integer', (t) => {
	t.is(floatOf('1'), 1);
});

test('string: float', (t) => {
	t.is(floatOf('1.2'), 1.2);
});

test('string: exponential', (t) => {
	t.is(floatOf('314e-2'), 3.14);
	t.is(floatOf('0.0314E+2'), 3.14);
	t.is(floatOf('421e+0'), 421);
});
