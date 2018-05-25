import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import infinity from './infinity.next';

test('describeType.is.infinity exposure', t => {
	t.is(toString.call(describeType.is.infinity), '[object Function]', 'should be a function');
});

test('infinity exposure', t => {
	t.is(toString.call(infinity), '[object Function]', 'should be a function');
});

datatypes.infinity.iterate(datatype => {
	test(`${datatype.id} • infinity(${datatype.label});`, t => {
		t.is(infinity(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.infinity);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • infinity(${datatype.label});`, t => {
		t.is(infinity(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.infinity);
