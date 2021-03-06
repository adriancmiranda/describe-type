import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import hex from './hex.next';

test('describeType.is.hex exposure', (t) => {
	t.is(toString.call(describeType.is.hex), '[object Function]', 'should be a function');
});

test('hex exposure', (t) => {
	t.is(toString.call(hex), '[object Function]', 'should be a function');
});

datatypes.hex.iterate((datatype) => {
	test(`${datatype.id} • hex(${datatype.label});`, (t) => {
		t.is(hex(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.string);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • hex(${datatype.label});`, (t) => {
		t.is(hex(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.string);
