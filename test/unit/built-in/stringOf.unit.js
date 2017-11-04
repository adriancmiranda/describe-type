import * as type from '~';

describe('#stringOf', function () {
	it('exposed', function () {
		expect(type.stringOf).toEqual(jasmine.any(Function));
	});

	it('RegExp', function () {
		expect(type.stringOf(/foo/)).toEqual('RegExp');
	});

	it('Function', function () {
		expect(type.stringOf(function () {})).toEqual('Function');
	});

	it('Function', function () {
		expect(type.stringOf(function () {}, true)).toEqual('Function');
	});

	it('Function', function () {
		expect(type.stringOf(function Test() {})).toEqual('Function');
	});

	it('Function', function () {
		expect(type.stringOf(function Test() {}, true)).toEqual('Function');
	});

	it('Test', function () {
		expect(type.stringOf(new (function Test() {}), true)).toEqual('Test');
	});

	it('Object', function () {
		expect(type.stringOf(Object.create(null), true)).toEqual('Object');
	});

	it('Object', function () {
		expect(type.stringOf(Object.create(null))).toEqual('Object');
	});

	it('Object', function () {
		expect(type.stringOf({})).toEqual('Object');
	});

	it('Number', function () {
		expect(type.stringOf(1)).toEqual('Number');
	});

	it('Date', function () {
		expect(type.stringOf(new Date())).toEqual('Date');
	});

	if (global.ArrayBuffer) {
		it('ArrayBuffer', function () {
			expect(type.stringOf(new global.ArrayBuffer(4))).toEqual('ArrayBuffer');
		});
	}
	if (global.Buffer) {
		it('Buffer', function () {
			expect(type.stringOf(new Buffer(3))).toEqual('Buffer');
		});
	}

	if (global.Promise) {
		it('Promise', function () {
			expect(type.stringOf(new global.Promise((resolve) => { resolve(); }))).toEqual('Promise');
		});
	}
});

