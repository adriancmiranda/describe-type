import test from 'ava';
import * as describeType from '../index.next';
import own from './own';

test('describeType.has.own exposure', (t) => {
	t.is(toString.call(describeType.has.own), '[object Function]', 'should be a function');
});

test('own exposure', (t) => {
	t.is(toString.call(own), '[object Function]', 'should be a function');
});
