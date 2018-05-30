import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import * as internal from './index.next';
import constructorOf from './constructorOf.next';

test('describeType.constructorOf exposure', (t) => {
	t.is(toString.call(describeType.constructorOf), '[object Function]', 'should be a function');
});

test('internal.constructorOf exposure', (t) => {
	t.is(toString.call(internal.constructorOf), '[object Function]', 'should be a function');
});

test('constructorOf exposure', (t) => {
	t.is(toString.call(constructorOf), '[object Function]', 'should be a function');
});

datatypes.all.iterate(({ id, name, seal, label, ctor, value }) => {
	test(`${id} • constructorOf(${label}, ${ctor});`, (t) => {
		if (!value) return t.pass();
		t.is(constructorOf(value), ctor);
	});
});
