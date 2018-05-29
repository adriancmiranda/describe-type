import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import unsafeMethod from './unsafeMethod';

test('describeType.has.unsafeMethod exposure', (t) => {
	t.is(toString.call(describeType.has.unsafeMethod), '[object Function]', 'should be a function');
});

test('unsafeMethod exposure', (t) => {
	t.is(toString.call(unsafeMethod), '[object Function]', 'should be a function');
});

// @waiting https://github.com/avajs/ava/issues/845
// datatypes.args.iterate(({ id, name, seal, label, ctor, value }) => {
// 	test(`${id} • unsafeMethod(${label}, 'callee');`, (t) => {
// 		t.false(unsafeMethod(value, 'callee'), 'should be false');
// 	});
// });
