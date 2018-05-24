import test from 'ava';
import * as describeType from '../index.next.js';
import unsafeMethod from './unsafeMethod';

test('describeType.has.unsafeMethod exposure', t => {
	t.is(toString.call(describeType.has.unsafeMethod), '[object Function]', 'should be a function');
});

test('unsafeMethod exposure', t => {
	t.is(toString.call(unsafeMethod), '[object Function]', 'should be a function');
});
