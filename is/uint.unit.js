import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import uint from './uint.next';

test('describeType.is.uint exposure', (t) => {
	t.is(toString.call(describeType.is.uint), '[object Function]', 'should be a function');
});

test('uint exposure', (t) => {
	t.is(toString.call(uint), '[object Function]', 'should be a function');
});

datatypes.uint.add(datatypes.zeroPositiveInteger);
datatypes.uint.iterate((datatype) => {
	test(`${datatype.id} • uint(${datatype.label});`, (t) => {
		t.is(uint(datatype.value), true, 'should be true');
	});
});
datatypes.uint.remove(datatypes.zeroPositiveInteger);

datatypes.decimal.iterate((datatype) => {
	test(`${datatype.id} • uint(${datatype.label});`, (t) => {
		t.is(uint(datatype.value), false, 'should be false');
	});
});
