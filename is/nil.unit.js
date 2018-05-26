import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import nil from './nil.next';

test('describeType.is.nil exposure', (t) => {
	t.is(toString.call(describeType.is.nil), '[object Function]', 'should be a function');
});

test('nil exposure', (t) => {
	t.is(toString.call(nil), '[object Function]', 'should be a function');
});

datatypes.nil.iterate((datatype) => {
	test(`${datatype.id} • nil(${datatype.label});`, (t) => {
		t.is(nil(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate((datatype) => {
	if (nil(datatype.value) === false) {
		test(`${datatype.id} • nil(${datatype.label});`, (t) => {
			t.is(nil(datatype.value), false, 'should be false');
		});
	}
});
