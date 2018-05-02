import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '..';
import int from '../../../is/int';

test('describeType.is.int exposure', (t) => {
	t.is(toString.call(describeType.is.int), '[object Function]', 'should be a function');
});

test('int exposure', (t) => {
	t.is(toString.call(int), '[object Function]', 'should be a function');
});

datatypes.int.add(datatypes.zero);
datatypes.int.iterate(datatype => {
	test(`${datatype.id} • int(${datatype.label});`, (t) => {
		t.is(int(datatype.value), true, 'should be true');
	});
});
datatypes.int.remove(datatypes.zero);

datatypes.decimal.iterate(datatype => {
	test(`${datatype.id} • int(${datatype.label});`, (t) => {
		t.is(int(datatype.value), false, 'should be false');
	});
});
