import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import primitive from './primitive.next';
import exotic from './exotic.next';

test('describeType.is.exotic exposure', (t) => {
	t.is(toString.call(describeType.is), '[object Object]', 'should be a namespace');
	t.is(toString.call(describeType.is.exotic), '[object Function]', 'should be a function');
});

test('exotic exposure', (t) => {
	t.is(toString.call(exotic), '[object Function]', 'should be a function');
});

datatypes.all.iterate((datatype) => {
	if (primitive(datatype.value) === false) {
		test(`${datatype.id} • exotic(${datatype.label});`, (t) => {
			t.is(exotic(datatype.value), true, 'should be true');
		});
	}
});

datatypes.primitive.iterate((datatype) => {
	test(`${datatype.id} • exotic(${datatype.label});`, (t) => {
		t.is(exotic(datatype.value), false, 'should be false');
	});
});
