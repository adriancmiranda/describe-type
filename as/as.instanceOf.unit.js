import test from 'ava';
import * as describeType from '../index.next';
import asInstanceOf from './as.instanceOf.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.instanceOf method is exposed', (t) => {
	t.is(toString.call(describeType.as.instanceOf), '[object Function]', 'should be a function');
});

test('as.asInstanceOf method is exposed', (t) => {
	t.is(toString.call(asInstanceOf), '[object Function]', 'should be a function');
});
