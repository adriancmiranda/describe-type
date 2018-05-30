import test from 'ava';
import Custom from '../.fixtures/datatype/types/custom';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import * as internal from './index.next';
import constructorNameOf from './constructorNameOf.next';

test('describeType.constructorNameOf exposure', (t) => {
	t.is(toString.call(describeType.constructorNameOf), '[object Function]', 'should be a function');
});

test('internal.constructorNameOf exposure', (t) => {
	t.is(toString.call(internal.constructorNameOf), '[object Function]', 'should be a function');
});

test('constructorNameOf exposure', (t) => {
	t.is(toString.call(constructorNameOf), '[object Function]', 'should be a function');
});

datatypes.all.iterate(({ id, name, seal, label, ctor, value }) => {
	test(`${id} • constructorNameOf(${label}, ${ctor});`, (t) => {
		if (/Infinity$/.test(name)) t.is(constructorNameOf(value), 'Infinity');
		else if (value === undefined) t.is(constructorNameOf(value), 'undefined');
		else if (value === null) t.is(constructorNameOf(value), 'null');
		else t.is(constructorNameOf(value), name);
	});
});
