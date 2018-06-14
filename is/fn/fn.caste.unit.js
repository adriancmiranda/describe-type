import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import fnCaste from './fn.caste.next';

test('describeType.is.fn.caste exposure', (t) => {
	t.is(toString.call(describeType.is.fn.caste), '[object Function]', 'should be a function');
});

test('fnCaste exposure', (t) => {
	t.is(toString.call(fnCaste), '[object Function]', 'should be a function');
});
