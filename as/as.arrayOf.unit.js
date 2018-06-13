import test from 'ava';
import * as describeType from '../index.next';
import asArrayOf from './as.arrayOf.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.arrayOf method is exposed', (t) => {
	t.is(toString.call(describeType.as.arrayOf), '[object Function]', 'should be a function');
});

test('as.arrayOf method is exposed', (t) => {
	t.is(toString.call(asArrayOf), '[object Function]', 'should be a function');
});

test('as.arrayOf: valid vectors', t => {
	const stringVector = ['bar', new String('foo'), 'baz'];
	const numberVector = [Math.PI, Number.NEGATIVE_INFINITY, 10, Number.POSITIVE_INFINITY, 0.3]
	t.deepEqual(asArrayOf(String, stringVector), stringVector, 'should be the list of string');
	t.deepEqual(asArrayOf(Number, numberVector), numberVector, 'should be the list of number');
	t.deepEqual(asArrayOf(String, () => stringVector), stringVector, 'should return the list of string');
	t.deepEqual(asArrayOf(Number, () => numberVector), numberVector, 'should return the list of number');
});

test('as.arrayOf: invalid vectors', t => {
	const stringVector = ['bar', new String('foo'), 'baz', 1];
	const numberVector = [Math.PI, Number.NEGATIVE_INFINITY, '10', Number.POSITIVE_INFINITY, 0.3]
	t.deepEqual(asArrayOf(String, stringVector), undefined, 'should be the list of string');
	t.deepEqual(asArrayOf(String, stringVector, null), null, 'should be the list of string');
	t.deepEqual(asArrayOf(String, stringVector, []), [], 'should be the list of string');
	t.deepEqual(asArrayOf(Number, numberVector, 10), 10, 'should be the list of string');
});
