import test from 'ava';
import * as describeType from '../index.next';
import asVectorOf from './as.vectorOf.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.vectorOf method is exposed', (t) => {
	t.is(toString.call(describeType.as.vectorOf), '[object Function]', 'should be a function');
});

test('as.type method is exposed', (t) => {
	t.is(toString.call(asVectorOf), '[object Function]', 'should be a function');
});
