import test from 'ava';
import type from '../../';

test('toString', (t) => {
	t.is(toString.call(type.toString), '[object Function]');
	t.is(type.toString(/foo/), 'RegExp');
	t.is(type.toString(function () {}), 'Function');
	t.is(type.toString(function () {}, true), 'Function');
	t.is(type.toString(function Test() {}), 'Function');
	t.is(type.toString(function Test() {}, true), 'Function');
	t.is(type.toString(new (function Test() {}), true), 'Test');
	t.is(type.toString(Object.create(null), true), 'Object');
	t.is(type.toString(Object.create(null)), 'Object');
	t.is(type.toString({}), 'Object');
	t.is(type.toString(1), 'Number');
});
