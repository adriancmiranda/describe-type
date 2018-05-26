import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import object from './object.next';

test('describeType.is.object exposure', (t) => {
	t.is(toString.call(describeType.is.object), '[object Function]', 'should be a function');
});

test('object exposure', (t) => {
	t.is(toString.call(object), '[object Function]', 'should be a function');
});

datatypes.object.iterate((datatype) => {
	test(`${datatype.id} • object(${datatype.label});`, (t) => {
		t.is(object(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate((datatype) => {
	if (object(datatype.value) === false) {
		test(`${datatype.id} • object(${datatype.label});`, (t) => {
			t.is(object(datatype.value), false, 'should be false');
		});
	}
});
