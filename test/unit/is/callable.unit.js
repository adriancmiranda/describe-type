import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import callable from '../../../source/is/callable';

test('describeType.is.callable exposure', (t) => {
	t.is(toString.call(describeType.is.callable), '[object Function]', 'should be a function');
});

test('callable exposure', (t) => {
	t.is(toString.call(callable), '[object Function]', 'should be a function');
});

datatypes.callable.iterate(datatype => {
	test(`${datatype.id} • callable(${datatype.label});`, (t) => {
		t.is(callable(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (callable(datatype.value) === false) {
		test(`${datatype.id} • callable(${datatype.label});`, (t) => {
			t.is(callable(datatype.value), false, 'should be false');
		});
	}
});
