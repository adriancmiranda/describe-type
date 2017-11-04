import type from '../../';

describe('toString', function () {
	it('', function () {
		expect(type.toString).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.toString(/foo/)).toEqual('RegExp');
	});

	it('', function () {
		expect(type.toString(function () {})).toEqual('Function');
	});

	it('', function () {
		expect(type.toString(function () {}, true)).toEqual('Function');
	});

	it('', function () {
		expect(type.toString(function Test() {})).toEqual('Function');
	});

	it('', function () {
		expect(type.toString(function Test() {}, true)).toEqual('Function');
	});

	it('', function () {
		expect(type.toString(new (function Test() {}), true)).toEqual('Test');
	});

	it('', function () {
		expect(type.toString(Object.create(null), true)).toEqual('Object');
	});

	it('', function () {
		expect(type.toString(Object.create(null))).toEqual('Object');
	});

	it('', function () {
		expect(type.toString({})).toEqual('Object');
	});

	it('', function () {
		expect(type.toString(1)).toEqual('Number');
	});
});

