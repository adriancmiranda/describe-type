import test from 'ava';
import * as describeType from '../index.next';
import asAn from './as.an.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.an method is exposed', (t) => {
	t.is(toString.call(describeType.as.an), '[object Function]', 'should be a function');
});

test('as.an method is exposed', (t) => {
	t.is(toString.call(asAn), '[object Function]', 'should be a function');
});
