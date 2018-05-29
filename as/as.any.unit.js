import test from 'ava';
import * as describeType from '../index.next';
import asAny from './as.any.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.any method is exposed', (t) => {
	t.is(toString.call(describeType.as.any), '[object Function]', 'should be a function');
});

test('as.any method is exposed', (t) => {
	t.is(toString.call(asAny), '[object Function]', 'should be a function');
});

test('as.any: multiple types', (t) => {
	function foo() {}
	t.is(asAny([Number, Function], foo), foo);
});

test('as.any: execution', (t) => {
	t.is(asAny(Number, function bar(a, b) { return a + b; }, 1, 2), 3);
});

test('as.any: invalid number', (t) => {
	t.is(asAny(Number, () => 'foo'), undefined);
	t.is(asAny(Number, 'foo'), undefined);
});

test('as.any: single type', (t) => {
	t.is(asAny(String, () => 'foo'), 'foo');
	t.is(asAny(String, () => ''), '');
	t.is(asAny(String, 'foo'), 'foo');
	t.is(asAny(String, ''), '');
	t.is(asAny(String, function baz() {}), undefined);
	t.is(asAny(String, undefined), undefined);
});

test('as.any: undefined', (t) => {
	t.is(asAny(undefined, undefined), undefined);
});

test('as.any: null', (t) => {
	t.is(asAny(null, null), null);
});
