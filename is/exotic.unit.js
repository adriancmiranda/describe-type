import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import primitive from '../../../is/primitive';
import exotic from '../../../is/exotic';

test('describeType.is.exotic exposure', (t) => {
	t.is(toString.call(describeType.is), '[object Object]', 'should be a namespace');
	t.is(toString.call(describeType.is.exotic), '[object Function]', 'should be a function');
});

test('exotic exposure', (t) => {
	t.is(toString.call(exotic), '[object Function]', 'should be a function');
});

datatypes.all.iterate(datatype => {
	if (primitive(datatype.value) === false) {
		test(`${datatype.id} • exotic(${datatype.label});`, (t) => {
			t.is(exotic(datatype.value), true, 'should be true');
		});
	}
});

datatypes.primitive.iterate(datatype => {
	test(`${datatype.id} • exotic(${datatype.label});`, (t) => {
		t.is(exotic(datatype.value), false, 'should be false');
	});
});
