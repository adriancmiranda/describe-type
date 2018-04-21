import test from 'ava';
import * as type from '~';

// TODO:
test('as', function () {
	// it('exposed', function () {
	// 	expect(type.as).toEqual(jasmine.any(Function));
	// });

	// it('Number|Function', function () {
	// 	function foo() {}
	// 	expect(type.as([Number, Function], foo)).toEqual(foo);
	// });

	it('Number', function () {
		expect(type.as(Number, function bar(a, b) { return a + b; }, 1, 2)).toEqual(3);
	});

	// it('String', function () {
	// 	expect(type.as(String, function baz() {})).toEqual(undefined);
	// });

	// it('Number', function () {
	// 	expect(type.as(Number, () => 'foo')).toEqual(undefined);
	// });

	// it('String', function () {
	// 	expect(type.as(String, () => 'foo')).toEqual('foo');
	// });

	// it('String', function () {
	// 	expect(type.as(String, () => '')).toEqual('');
	// });

	// it('"Number"', function () {
	// 	expect(type.as(Number, 'foo')).toEqual(undefined);
	// });

	// it('String', function () {
	// 	expect(type.as(String, 'foo')).toEqual('foo');
	// });

	// it('undefined', function () {
	// 	expect(type.as(undefined, undefined)).toEqual(undefined);
	// });

	// it('null', function () {
	// 	expect(type.as(null, null)).toEqual(null);
	// });

	// it('String', function () {
	// 	expect(type.as(String, undefined)).toEqual(undefined);
	// });

	// it('String', function () {
	// 	expect(type.as(String, '')).toEqual('');
	// });
});
