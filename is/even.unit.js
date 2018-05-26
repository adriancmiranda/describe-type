import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import even from './even.next';

test('describeType.is.even exposure', (t) => {
	t.is(toString.call(describeType.is.even), '[object Function]', 'should be a function');
});

test('even exposure', (t) => {
	t.is(toString.call(even), '[object Function]', 'should be a function');
});

datatypes.even.iterate((datatype) => {
	test(`${datatype.id} • even(${datatype.label});`, (t) => {
		t.is(even(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.number);
datatypes.all.add(datatypes.odd);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • even(${datatype.label});`, (t) => {
		t.is(even(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.number);
datatypes.all.remove(datatypes.odd);
