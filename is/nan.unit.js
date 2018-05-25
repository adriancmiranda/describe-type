import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import nan from './nan.next';

test('describeType.is.nan exposure', t => {
	t.is(toString.call(describeType.is.nan), '[object Function]', 'should be a function');
});

test('nan exposure', t => {
	t.is(toString.call(nan), '[object Function]', 'should be a function');
});

datatypes.nan.iterate(datatype => {
	test(`${datatype.id} • nan(${datatype.label});`, t => {
		t.is(nan(datatype.value), true, 'should be true');
	});
});

datatypes.number.remove(datatypes.nan);
datatypes.number.iterate(datatype => {
	test(`${datatype.id} • nan(${datatype.label});`, t => {;
		t.is(nan(datatype.value), false, 'should be false');
	});
});
datatypes.number.add(datatypes.nan);
