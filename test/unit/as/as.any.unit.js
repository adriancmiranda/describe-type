import test from 'ava';
import * as describeType from '../../../source';
import asAny from '../../../source/as/as.any';

test('describeType.as.any method is exposed', (t) => {
	t.is(toString.call(describeType.as.any), '[object Function]', 'should be a function');
});

test('asAny exposed', (t) => {
	t.is(toString.call(asAny), '[object Function]', 'should be a function');
});

test('Number|Function', (t) => {
	function foo() {}
	t.is(asAny([Number, Function], foo), foo);
});

test('Number', (t) => {
	t.is(asAny(Number, function bar(a, b) { return a + b; }, 1, 2), 3);
});

test('String', (t) => {
	t.is(asAny(String, function baz() {}), undefined);
});

test('Number', (t) => {
	t.is(asAny(Number, () => 'foo'), undefined);
});

test('String', (t) => {
	t.is(asAny(String, () => 'foo'), 'foo');
});

test('String', (t) => {
	t.is(asAny(String, () => ''), '');
});

test('"Number"', (t) => {
	t.is(asAny(Number, 'foo'), undefined);
});

test('String', (t) => {
	t.is(asAny(String, 'foo'), 'foo');
});

test('undefined', (t) => {
	t.is(asAny(undefined, undefined), undefined);
});

test('null', (t) => {
	t.is(asAny(null, null), null);
});

test('String', (t) => {
	t.is(asAny(String, undefined), undefined);
});

test('String', (t) => {
	t.is(asAny(String, ''), '');
});
