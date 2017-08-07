import type from '../../';

describe('typify', function () {
	it('exposed', function () {
		expect(type.typify).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.typify('Arguments', (() => arguments)())).toEqual('Arguments');
	});

	it('', function () {
		expect(type.typify([String, Function, Object, Boolean])).toEqual('String|Function|Object|Boolean');
	});

	it('', function () {
		expect(type.typify([String, Function, Object, global.Boolean,])).toEqual('String|Function|Object|Boolean'); // should be 'Symbol|String|Function|Object|Boolean|Undefined'?
	});

	it('', function () {
		expect(type.typify('Symbol|String|Function|Object|Boolean', true)).toEqual('Symbol|String|Function|Object|Boolean');
	});

	it('', function () {
		expect(type.typify([1, []])).toEqual('Number|Array');
	});

	it('', function () {
		expect(type.typify([1, 'Custom', {}])).toEqual('Number|String|Object');
	});

	it('', function () {
		expect(type.typify([1, 'Custom', {}], true)).toEqual('Number|Custom|Object');
	});

	it('', function () {
		expect(type.typify('Custom', true)).toEqual('Custom');
	});

	it('', function () {
		expect(type.typify([])).toEqual('Array');
	});

	it('', function () {
		expect(type.typify(1)).toEqual('Number');
	});

	it('', function () {
		expect(type.typify({})).toEqual('Object');
	});

	it('', function () {
		expect(type.typify({ name: 1 })).toEqual('Object');
	});

	it('', function () {
		expect(type.typify(/^./g)).toEqual('RegExp');
	});

	it('', function () {
		expect(type.typify(false)).toEqual('Boolean');
	});

	it('', function () {
		expect(type.typify(new Date())).toEqual('Date');
	});

	it('', function () {
		expect(type.typify(Date)).toEqual('Date');
	});

	if (global.ArrayBuffer) {
		it('', function () {
			expect(type.typify(global.ArrayBuffer)).toEqual('ArrayBuffer');
		});
	}

	it('', function () {
		expect(type.typify(new global.ArrayBuffer(4))).toEqual('ArrayBuffer');
	});

	if (global.Buffer) {
		it('', function () {
			expect(type.typify(global.Buffer)).toEqual('Buffer');
		});

		it('', function () {
			expect(type.typify(new global.Buffer('ab'))).toEqual('Buffer');
		});
	}

	if (global.Promise) {
		it('', function () {
			expect(type.typify(new global.Promise((resolve) => { resolve(); }))).toEqual('Promise');
		});
	}
});
