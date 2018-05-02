import test from 'ava';
import { toSource, constructorNameOf } from '../../fixtures/datatype/utils';
import * as describeType from '../index.js';
import vector from '../../../is/vector';

test('describeType.is.vector exposure', (t) => {
	t.is(toString.call(describeType.is.vector), '[object Function]', 'should be a function');
});

test('vector exposure', (t) => {
	t.is(toString.call(vector), '[object Function]', 'should be a function');
});

[
	{ type: Number, value: [1, 2, 3, 4.5, 2] },
	{ type: Number, value: [0, -1, -2, -4.5, -20] },
	{ type: String, value: ['foo', 'bar', 'baz'] },
	{ type: Array, value: [[1, 0, 0, 0, 1], [0, 1], [0, 0]] },
	{ type: Object, value: [Object.create(null), {}, { hello: 'foo' }] },
	{ type: Function, value: [function () {}] },
	{ type: undefined, value: [] },
	{ type: null, value: [] },
	{ type: Boolean, value: [true, false, true] },
	{ type: RegExp, value: [/foo/, /bar/, /baz/] },
].forEach(datatype => {
	test(`vector(${constructorNameOf(datatype.type)}, ${toSource(datatype.value)});`, (t) => {
		t.is(vector(datatype.type, datatype.value), true, 'should be true');
	});
});

[
	{ type: String, value: [1, 2, 3, 4.5, 2] },
	{ type: Array, value: [0, -1, -2, -4.5, -20] },
	{ type: Number, value: ['foo', 'bar', 'baz'] },
	{ type: RegExp, value: [[1, 0, 0, 0, 1], [0, 1], [0, 0]] },
	{ type: Object, value: [true, false, true] },
	{ type: Boolean, value: [/foo/, /bar/, /baz/] },
].forEach(datatype => {
	test(`vector(${constructorNameOf(datatype.type)}, ${toSource(datatype.value)});`, (t) => {
		t.is(vector(datatype.value), false, 'should be false');
	});
});
