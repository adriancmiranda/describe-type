import test from 'ava';
import * as describeType from '../index.next';
import asA from './as.a.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.a method is exposed', (t) => {
	t.is(toString.call(describeType.as.a), '[object Function]', 'should be a function');
});

test('as.a method is exposed', (t) => {
	t.is(toString.call(asA), '[object Function]', 'should be a function');
});
