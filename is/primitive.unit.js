import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.next.js';
import primitive from './primitive.next';
import exotic from './exotic.next';

test('describeType.is.primitive exposure', t => {
	t.is(toString.call(describeType.is.primitive), '[object Function]', 'should be a function');
});

test('primitive exposure', t => {
	t.is(toString.call(primitive), '[object Function]', 'should be a function');
});

datatypes.primitive.iterate(datatype => {
	test(`${datatype.id} • primitive(${datatype.label});`, t => {
		t.is(primitive(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (exotic(datatype.value)) {
		test(`${datatype.id} • primitive(${datatype.label});`, t => {
			t.is(primitive(datatype.value), false, 'should be false');
		});
	}
});
