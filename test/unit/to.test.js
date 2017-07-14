import test from 'ava';
import type from '../../';

test('to', (t) => {
	t.is(toString.call(type.to), '[object Object]');
});

test('to.string', (t) => {
	t.is(toString.call(type.to.string), '[object Function]');
	t.is(type.to.string(/foo/), '/foo/');
	t.is(type.to.string(function Test() {}), 'function Test() {}');
	t.is(type.to.string({}), '{}');
	t.is(type.to.string(1), '1');
	t.is(type.to.string(null), 'null');
	t.is(type.to.string(), undefined);
});

test('to.int', (t) => {
	t.is(toString.call(type.to.int), '[object Function]');
	t.is(type.to.int(-1.2), -1);
	t.is(type.to.int(1.2), 1);
	t.is(type.to.int(1), 1);
});

test('to.uint', (t) => {
	t.is(toString.call(type.to.uint), '[object Function]');
	t.is(type.to.uint(-1.2), 0);
	t.is(type.to.uint(1.2), 1);
	t.is(type.to.uint(1), 1);
});

test('to.float', (t) => {
	t.is(toString.call(type.to.float), '[object Function]');
	t.is(type.to.float('1'), 1);
	t.is(type.to.float('1.2'), 1.2);
});

test('to.bool', (t) => {
	t.is(toString.call(type.to.bool), '[object Function]');
	t.is(type.to.bool(0), false);
	t.is(type.to.bool(1), true);
	t.is(type.to.bool('true'), true);
	t.is(type.to.bool('false'), false);
	t.is(type.to.bool(NaN), false);
	t.is(type.to.bool(Infinity), true);
	t.is(type.to.bool('0'), false);
	t.is(type.to.bool('1'), true);
});
