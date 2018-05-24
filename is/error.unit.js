import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.next.js';
import error from './error.next';

test('describeType.is.error exposure', t => {
	t.is(toString.call(describeType.is.error), '[object Function]', 'should be a function');
});

test('error exposure', t => {
	t.is(toString.call(error), '[object Function]', 'should be a function');
});

datatypes.error.iterate(datatype => {
	test(`${datatype.id} • error(${datatype.label});`, t => {
		t.is(error(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (error(datatype.value) === false) {
		test(`${datatype.id} • error(${datatype.label});`, t => {
			t.is(error(datatype.value), false, 'should be false');
		});
	}
});
