import test from 'ava';
import * as describeType from '../../../source';
import as from '../../../source/as/index.js';

test('as exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');;
});

// test('Number|Function', (t) => {
// 	function foo() {}
// 	t.is(describeType.as([Number, Function], foo), foo);
// });

// test('Number', (t) => {
// 	t.is(describeType.as(Number, function bar(a, b) { return a + b; }, 1, 2), 3);
// });

// test('String', (t) => {
// 	t.is(describeType.as(String, function baz() {}), undefined);
// });

// test('Number', (t) => {
// 	t.is(describeType.as(Number, () => 'foo'), undefined);
// });

// test('String', (t) => {
// 	t.is(describeType.as(String, () => 'foo'), 'foo');
// });

// test('String', (t) => {
// 	t.is(describeType.as(String, () => ''), '');
// });

// test('"Number"', (t) => {
// 	t.is(describeType.as(Number, 'foo'), undefined);
// });

// test('String', (t) => {
// 	t.is(describeType.as(String, 'foo'), 'foo');
// });

// test('undefined', (t) => {
// 	t.is(describeType.as(undefined, undefined), undefined);
// });

// test('null', (t) => {
// 	t.is(describeType.as(null, null), null);
// });

// test('String', (t) => {
// 	t.is(describeType.as(String, undefined), undefined);
// });

// test('String', (t) => {
// 	t.is(describeType.as(String, ''), '');
// });
