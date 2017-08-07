import Exotic from '../fixtures/exotic.fixture';
import type from '../../';

describe('name', function () {
	it('exposed', function () {
		expect(type.name).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.name((() => arguments)())).toEqual('Arguments');
	});

	it('', function () {
		expect(type.name(String)).toEqual('String');
	});

	it('', function () {
		expect(type.name(RegExp)).toEqual('RegExp');
	});

	it('', function () {
		expect(type.name(Number)).toEqual('Number');
	});

	it('', function () {
		expect(type.name(TypeError)).toEqual('TypeError');
	});

	it('', function () {
		expect(type.name(Error)).toEqual('Error');
	});

	it('', function () {
		expect(type.name(Object)).toEqual('Object');
	});

	it('', function () {
		expect(type.name(Array)).toEqual('Array');
	});

	it('', function () {
		expect(type.name(Boolean)).toEqual('Boolean');
	});

	it('', function () {
		expect(type.name(Date)).toEqual('Date');
	});

	it('', function () {
		expect(type.name(null)).toEqual('null');
	});

	it('', function () {
		expect(type.name(undefined)).toEqual('undefined');
	});

	it('', function () {
		expect(type.name(NaN)).toEqual('NaN');
	});

	it('', function () {
		expect(type.name('|a-b|b>a|', true)).toEqual('_a_b|b_a_');
	});

	it('', function () {
		expect(type.name('ab|ba', true)).toEqual('ab|ba');
	});

	it('', function () {
		expect(type.name('ab|ba')).toEqual('String');
	});

	it('', function () {
		expect(type.name([1, 2])).toEqual('Array');
	});

	it('', function () {
		expect(type.name(/^./g)).toEqual('RegExp');
	});

	it('', function () {
		expect(type.name(10000)).toEqual('Number');
	});

	it('', function () {
		expect(type.name({ name: 1 })).toEqual('Object');
	});

	it('', function () {
		expect(type.name(false)).toEqual('Boolean');
	});

	it('', function () {
		expect(type.name(new Date())).toEqual('Date');
	});

	if (Exotic.supportsCustomization) {
		it('', function () {
			expect(type.name(new Exotic('FixtureTest'))).toEqual('FixtureTest');
		});

		it('', function () {
			expect(type.name(Exotic)).toEqual('FixtureTest');
		});
	}

	if (global.Symbol) {
		it('', function () {
			expect(type.name(global.Symbol)).toEqual('Symbol');
		});
	}

	if (global.Promise) {
		it('', function () {
			expect(type.name(global.Promise)).toEqual('Promise');
		});
	}

	if (global.ArrayBuffer) {
		it('', function () {
			expect(type.name(global.ArrayBuffer)).toEqual('ArrayBuffer');
		});

		it('', function () {
			expect(type.name(new global.ArrayBuffer(4))).toEqual('ArrayBuffer');
		});
	}

	if (global.Int32Array && global.ArrayBuffer) {
		it('', function () {
			expect(type.name(new global.Int32Array(new global.ArrayBuffer(8)))).toEqual('Int32Array');
		});
	}

	if (global.Buffer) {
		it('', function () {
			expect(type.name(global.Buffer)).toEqual('Buffer');
		});

		it('', function () {
			expect(type.name(new global.Buffer('ab'))).toEqual('Buffer');
		});
	}
});
