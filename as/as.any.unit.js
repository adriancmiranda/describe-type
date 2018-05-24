import test from 'ava';
import * as describeType from '../index.next.js';
import asAny from './as.any.next.js';

test('describeType.as method is exposed', t => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.any method is exposed', t => {
	t.is(toString.call(describeType.as.any), '[object Function]', 'should be a function');
});

test('as.any method is exposed', t => {
	t.is(toString.call(asAny), '[object Function]', 'should be a function');
});

test('Number|Function', t => {
	function foo() {}
	t.is(asAny([Number, Function], foo), foo);
});

test('sum method', t => {
	t.is(asAny(Number, function bar(a, b) { return a + b; }, 1, 2), 3);
});

test('invalid number', t => {
	t.is(asAny(Number, () => 'foo'), undefined);
	t.is(asAny(Number, 'foo'), undefined);
});

test('String', t => {
	t.is(asAny(String, () => 'foo'), 'foo');
	t.is(asAny(String, () => ''), '');
	t.is(asAny(String, 'foo'), 'foo');
	t.is(asAny(String, ''), '');
	t.is(asAny(String, function baz() {}), undefined);
	t.is(asAny(String, undefined), undefined);
});

test('undefined', t => {
	t.is(asAny(undefined, undefined), undefined);
});

test('null', t => {
	t.is(asAny(null, null), null);
});
