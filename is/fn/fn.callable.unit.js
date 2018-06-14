import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import fnCallable from './fn.callable.next';

test('describeType.is.fn.callable exposure', (t) => {
	t.is(toString.call(describeType.is.fn.callable), '[object Function]', 'should be a function');
});

test('fnCallable exposure', (t) => {
	t.is(toString.call(fnCallable), '[object Function]', 'should be a function');
});
