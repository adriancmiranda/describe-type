import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import empty from '../../../is/empty';

test('describeType.is.empty exposure', (t) => {
	t.is(toString.call(describeType.is.empty), '[object Function]', 'should be a function');
});

test('empty exposure', (t) => {
	t.is(toString.call(empty), '[object Function]', 'should be a function');
});

datatypes.empty.iterate(datatype => {
	test(`${datatype.id} • empty(${datatype.label});`, (t) => {
		t.is(empty(datatype.value), true, 'should be true');
	});
});

datatypes.filled.iterate(datatype => {
	test(`${datatype.id} • empty(${datatype.label});`, (t) => {
		t.is(empty(datatype.value), false, 'should be false');
	});
});
