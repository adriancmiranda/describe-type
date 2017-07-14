import test from 'ava';
import type from '../../';

test('to', (t) => {
	t.is(toString.call(type.to), '[object Object]');
})

test('to.string', (t) => {
	t.is(toString.call(type.to.string), '[object Function]');
	t.is(type.to.string(/foo/), 'RegExp');
	t.is(type.to.string(function () {}), 'Function');
	t.is(type.to.string(function () {}, true), 'Function');
	t.is(type.to.string(function Test() {}), 'Function');
	t.is(type.to.string(function Test() {}, true), 'Function');
	t.is(type.to.string(new (function Test() {}), true), 'Test');
	t.is(type.to.string(Object.create(null), true), 'Object');
	t.is(type.to.string(Object.create(null)), 'Object');
	t.is(type.to.string({}), 'Object');
	t.is(type.to.string(1), 'Number');
});
