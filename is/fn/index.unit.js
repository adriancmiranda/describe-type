import test from 'ava';
import * as describeType from '../../index.next';
import fn from './fn.next';

test('describeType.is.fn exposure', (t) => {
	t.is(toString.call(describeType.is.fn), '[object Function]', 'should be a function');
});

datatypes.fn.iterate(({ id, name, seal, label, ctor, value }) => {
	test(`${id} • index.fn(${label}, ${ctor});`, (t) => {
		t.true(fn(value), 'should be function');
	});
});
