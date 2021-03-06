import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import decimal from './decimal.next';

test('describeType.is.decimal exposure', (t) => {
	t.is(toString.call(describeType.is.decimal), '[object Function]', 'should be a function');
});

test('decimal exposure', (t) => {
	t.is(toString.call(decimal), '[object Function]', 'should be a function');
});

datatypes.decimal.iterate((datatype) => {
	test(`${datatype.id} • decimal(${datatype.label});`, (t) => {
		t.is(decimal(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.decimal);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • decimal(${datatype.label});`, (t) => {
		t.is(decimal(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.decimal);
