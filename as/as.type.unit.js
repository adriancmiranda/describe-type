import test from 'ava';
import * as describeType from '../index.js';
import asType from './as.type.next.js';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.type method is exposed', (t) => {
	t.is(toString.call(describeType.as.type), '[object Function]', 'should be a function');
});

test('as.type method is exposed', (t) => {
	t.is(toString.call(asType), '[object Function]', 'should be a function');
});
