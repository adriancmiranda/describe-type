import test from 'ava';
import * as describeType from '../index.next';
import asVectorOf from './as.vectorOf.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.vectorOf method is exposed', (t) => {
	t.is(toString.call(describeType.as.vectorOf), '[object Function]', 'should be a function');
});

test('as.vectorOf method is exposed', (t) => {
	t.is(toString.call(asVectorOf), '[object Function]', 'should be a function');
});

test('as.vectorOf: valid vectors', t => {
	const stringVector = ['bar', new String('foo'), 'baz'];
	const numberVector = [Math.PI, Number.NEGATIVE_INFINITY, 10, Number.POSITIVE_INFINITY, 0.3]
	t.deepEqual(asVectorOf(String, stringVector), stringVector, 'should be the list of string');
	t.deepEqual(asVectorOf(Number, numberVector), numberVector, 'should be the list of number');
	t.deepEqual(asVectorOf(String, () => stringVector), stringVector, 'should return the list of string');
	t.deepEqual(asVectorOf(Number, () => numberVector), numberVector, 'should return the list of number');
});

test('as.vectorOf: invalid vectors', t => {
	const stringVector = ['bar', new String('foo'), 'baz', 1];
	const numberVector = [Math.PI, Number.NEGATIVE_INFINITY, '10', Number.POSITIVE_INFINITY, 0.3]
	t.deepEqual(asVectorOf(String, stringVector), undefined, 'should be the list of string');
	t.deepEqual(asVectorOf(String, stringVector, null), null, 'should be the list of string');
	t.deepEqual(asVectorOf(String, stringVector, []), [], 'should be the list of string');
	t.deepEqual(asVectorOf(Number, numberVector, 10), 10, 'should be the list of string');
});
