import test from 'ava';
import * as describeType from '..';
import asVectorOf from './as.vectorOf';

test('describeType.as.vectorOf method is exposed', (t) => {
	t.is(toString.call(describeType.as.vectorOf), '[object Function]', 'should be a function');
});

test('asVectorOf method is exposed', (t) => {
	t.is(toString.call(asVectorOf), '[object Function]', 'should be a function');
});
