import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import undef from './undef.next';

test('describeType.is.undef exposure', (t) => {
	t.is(toString.call(describeType.is.undef), '[object Function]', 'should be a function');
});

test('undef exposure', (t) => {
	t.is(toString.call(undef), '[object Function]', 'should be a function');
});

datatypes.undef.iterate((datatype) => {
	test(`${datatype.id} • undef(${datatype.label});`, (t) => {
		t.is(undef(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate((datatype) => {
	if (undef(datatype.value) === false) {
		test(`${datatype.id} • undef(${datatype.label});`, (t) => {
			t.is(undef(datatype.value), false, 'should be a false');
		});
	}
});
