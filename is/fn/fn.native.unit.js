import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import fnNative from './fn.native.next';

test('describeType.is.fnNative exposure', (t) => {
	t.is(toString.call(describeType.is.fn.native), '[object Function]', 'should be a function');
});

test('fnNative exposure', (t) => {
	t.is(toString.call(fnNative), '[object Function]', 'should be a function');
});

datatypes.nativeFunction.iterate((datatype) => {
	test(`${datatype.id} • fnNative(${datatype.label});`, (t) => {
		t.is(fnNative(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • fnNative(${datatype.label});`, (t) => {
		t.is(fnNative(datatype.value), false, 'should be false');
	});
});
