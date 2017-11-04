import * as type from '~';

describe('#typify', function () {
	it('exposed', function () {
		expect(type.typify).toEqual(jasmine.any(Function));
	});

	it('Arguments', function () {
		expect(type.typify('Arguments', (() => arguments)())).toEqual('Arguments');
	});

	it('String|Function|Object|Boolean', function () {
		expect(type.typify([String, Function, Object, Boolean])).toEqual('String|Function|Object|Boolean');
	});

	it('String|Function|Object|Boolean', function () {
		expect(type.typify([String, Function, Object, global.Boolean,])).toEqual('String|Function|Object|Boolean'); // should be 'Symbol|String|Function|Object|Boolean|Undefined'?
	});

	it('Symbol|String|Function|Object|Boolean', function () {
		expect(type.typify('Symbol|String|Function|Object|Boolean', true)).toEqual('Symbol|String|Function|Object|Boolean');
	});

	it('Number|Array', function () {
		expect(type.typify([1, []])).toEqual('Number|Array');
	});

	it('Number|String|Object', function () {
		expect(type.typify([1, 'Custom', {}])).toEqual('Number|String|Object');
	});

	it('Number', function () {
		expect(type.typify([1, 'Custom', {}], true)).toEqual('Number|Custom|Object');
	});

	it('Custom', function () {
		expect(type.typify('Custom', true)).toEqual('Custom');
	});

	it('Array', function () {
		expect(type.typify([])).toEqual('Array');
	});

	it('Number', function () {
		expect(type.typify(1)).toEqual('Number');
	});

	it('Object', function () {
		expect(type.typify({})).toEqual('Object');
	});

	it('Object', function () {
		expect(type.typify({ name: 1 })).toEqual('Object');
	});

	it('RegExp', function () {
		expect(type.typify(/^./g)).toEqual('RegExp');
	});

	it('Boolean', function () {
		expect(type.typify(false)).toEqual('Boolean');
	});

	it('Date', function () {
		expect(type.typify(new Date())).toEqual('Date');
	});

	it('Date', function () {
		expect(type.typify(Date)).toEqual('Date');
	});

	if (global.ArrayBuffer) {
		it('ArrayBuffer', function () {
			expect(type.typify(global.ArrayBuffer)).toEqual('ArrayBuffer');
		});
	}

	it('ArrayBuffer', function () {
		expect(type.typify(new global.ArrayBuffer(4))).toEqual('ArrayBuffer');
	});

	if (global.Buffer) {
		it('Buffer', function () {
			expect(type.typify(global.Buffer)).toEqual('Buffer');
		});

		it('Buffer', function () {
			expect(type.typify(new global.Buffer('ab'))).toEqual('Buffer');
		});
	}

	if (global.Promise) {
		it('Promise', function () {
			expect(type.typify(new global.Promise((resolve) => { resolve(); }))).toEqual('Promise');
		});
	}
});
