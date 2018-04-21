import test from 'ava';
import Custom from 'fixtures/datatype/types/custom';
import * as type from '~';

test('#name', function () {
	it('exposed', function () {
		expect(type.name).toEqual(jasmine.any(Function));
	});

	it('Arguments', function () {
		expect(type.name((() => arguments)())).toEqual('Arguments');
	});

	it('String', function () {
		expect(type.name(String)).toEqual('String');
	});

	it('RegExp', function () {
		expect(type.name(RegExp)).toEqual('RegExp');
	});

	it('Number', function () {
		expect(type.name(Number)).toEqual('Number');
	});

	it('TypeError', function () {
		expect(type.name(TypeError)).toEqual('TypeError');
	});

	it('Error', function () {
		expect(type.name(Error)).toEqual('Error');
	});

	it('Object', function () {
		expect(type.name(Object)).toEqual('Object');
	});

	it('Array', function () {
		expect(type.name(Array)).toEqual('Array');
	});

	it('Boolean', function () {
		expect(type.name(Boolean)).toEqual('Boolean');
	});

	it('Date', function () {
		expect(type.name(Date)).toEqual('Date');
	});

	it('null', function () {
		expect(type.name(null)).toEqual('null');
	});

	it('undefined', function () {
		expect(type.name(undefined)).toEqual('undefined');
	});

	it('NaN', function () {
		expect(type.name(NaN)).toEqual('NaN');
	});

	it('_a_b|b_a_', function () {
		expect(type.name('|a-b|b>a|', true)).toEqual('_a_b|b_a_');
	});

	it('ab|ba', function () {
		expect(type.name('ab|ba', true)).toEqual('ab|ba');
	});

	it('String', function () {
		expect(type.name('ab|ba')).toEqual('String');
	});

	it('Array', function () {
		expect(type.name([1, 2])).toEqual('Array');
	});

	it('RegExp', function () {
		expect(type.name(/^./g)).toEqual('RegExp');
	});

	it('Number', function () {
		expect(type.name(10000)).toEqual('Number');
	});

	it('Object', function () {
		expect(type.name({ name: 1 })).toEqual('Object');
	});

	it('Boolean', function () {
		expect(type.name(false)).toEqual('Boolean');
	});

	it('Date', function () {
		expect(type.name(new Date())).toEqual('Date');
	});

	if (Custom.supportsCustomization) {
		it('FixtureTest', function () {
			expect(type.name(new Custom('FixtureTest'))).toEqual('FixtureTest');
		});

		it('FixtureTest', function () {
			expect(type.name(Custom)).toEqual('FixtureTest');
		});
	}

	if (global.Symbol) {
		it('Symbol', function () {
			expect(type.name(global.Symbol)).toEqual('Symbol');
		});
	}

	if (global.Promise) {
		it('Promise', function () {
			expect(type.name(global.Promise)).toEqual('Promise');
		});
	}

	if (global.ArrayBuffer) {
		it('ArrayBuffer', function () {
			expect(type.name(global.ArrayBuffer)).toEqual('ArrayBuffer');
		});

		it('ArrayBuffer', function () {
			expect(type.name(new global.ArrayBuffer(4))).toEqual('ArrayBuffer');
		});
	}

	if (global.Int32Array && global.ArrayBuffer) {
		it('Int32Array', function () {
			expect(type.name(new global.Int32Array(new global.ArrayBuffer(8)))).toEqual('Int32Array');
		});
	}

	if (global.Buffer) {
		it('Buffer', function () {
			expect(type.name(global.Buffer)).toEqual('Buffer');
		});

		it('Buffer', function () {
			expect(type.name(new global.Buffer('ab'))).toEqual('Buffer');
		});
	}
});
