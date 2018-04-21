import test from 'ava';
import * as type from '~';

test('foo', t => {
	t.pass();
});

// test('exposed', (t) => {
// 	t.is(toString.call(type.as), '[object Function]');
// });

// test('Number|Function', (t) => {
// 	function foo() {}
// 	t.is(type.as([Number, Function], foo), foo);
// });

test('Number', (t) => {
	t.is(type.as(Number, function bar(a, b) { return a + b; }, 1, 2), 3);
});

// test('String', (t) => {
// 	t.is(type.as(String, function baz() {}), undefined);
// });

// test('Number', (t) => {
// 	t.is(type.as(Number, () => 'foo'), undefined);
// });

// test('String', (t) => {
// 	t.is(type.as(String, () => 'foo'), 'foo');
// });

// test('String', (t) => {
// 	t.is(type.as(String, () => ''), '');
// });

// test('"Number"', (t) => {
// 	t.is(type.as(Number, 'foo'), undefined);
// });

// test('String', (t) => {
// 	t.is(type.as(String, 'foo'), 'foo');
// });

// test('undefined', (t) => {
// 	t.is(type.as(undefined, undefined), undefined);
// });

// test('null', (t) => {
// 	t.is(type.as(null, null), null);
// });

// test('String', (t) => {
// 	t.is(type.as(String, undefined), undefined);
// });

// test('String', (t) => {
// 	t.is(type.as(String, ''), '');
// });
