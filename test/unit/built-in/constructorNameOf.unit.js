import Exotic from 'fixtures/exotic.fixture';
import * as type from '~';

describe('constructorNameOf', function () {
	it('exposed', function () {
		expect(type.constructorNameOf).toEqual(jasmine.any(Function));
	});

	it('Arguments', function () {
		expect(type.constructorNameOf((() => arguments)())).toEqual('Arguments');
	});

	it('Function', function () {
		expect(type.constructorNameOf(() => 'foo')).toEqual('Function');
	});

	it('Function', function () {
		expect(type.constructorNameOf(function () { return 'foo'; })).toEqual('Function');
	});

	it('String', function () {
		expect(type.constructorNameOf(String)).toEqual('String');
	});

	it('String', function () {
		expect(type.constructorNameOf(String.name)).toEqual('String');
	});

	it('RegExp', function () {
		expect(type.constructorNameOf(RegExp)).toEqual('RegExp');
	});

	it('String', function () {
		expect(type.constructorNameOf(RegExp.name)).toEqual('String');
	});

	it('Number', function () {
		expect(type.constructorNameOf(Number)).toEqual('Number');
	});

	it('String', function () {
		expect(type.constructorNameOf(Number.name)).toEqual('String');
	});

	it('TypeError', function () {
		expect(type.constructorNameOf(TypeError)).toEqual('TypeError');
	});

	it('String', function () {
		expect(type.constructorNameOf(TypeError.name)).toEqual('String');
	});

	it('Error', function () {
		expect(type.constructorNameOf(Error)).toEqual('Error');
	});

	it('String', function () {
		expect(type.constructorNameOf(Error.name)).toEqual('String');
	});

	it('Object', function () {
		expect(type.constructorNameOf(Object)).toEqual('Object');
	});

	it('String', function () {
		expect(type.constructorNameOf(Object.name)).toEqual('String');
	});

	it('Array', function () {
		expect(type.constructorNameOf(Array)).toEqual('Array');
	});

	it('String', function () {
		expect(type.constructorNameOf(Array.name)).toEqual('String');
	});

	it('Boolean', function () {
		expect(type.constructorNameOf(Boolean)).toEqual('Boolean');
	});

	it('String', function () {
		expect(type.constructorNameOf(Boolean.name)).toEqual('String');
	});

	it('Date', function () {
		expect(type.constructorNameOf(Date)).toEqual('Date');
	});

	it('String', function () {
		expect(type.constructorNameOf(Date.name)).toEqual('String');
	});

	it('null', function () {
		expect(type.constructorNameOf(null)).toEqual('null');
	});

	it('undefined', function () {
		expect(type.constructorNameOf(undefined)).toEqual('undefined');
	});

	it('Infinity', function () {
		expect(type.constructorNameOf(Infinity)).toEqual('Infinity');
	});

	it('NaN', function () {
		expect(type.constructorNameOf(NaN)).toEqual('NaN');
	});

	it('undefined', function () {
		expect(type.constructorNameOf(NaN.name)).toEqual('undefined');
	});

	it('String', function () {
		expect(type.constructorNameOf('ab|ba')).toEqual('String');
	});

	it('Exotic', function () {
		expect(type.constructorNameOf(new Exotic())).toEqual('Exotic');
	});

	it('Exotic', function () {
		expect(type.constructorNameOf(Exotic)).toEqual('Exotic');
	});

	it('String', function () {
		expect(type.constructorNameOf(Exotic.name)).toEqual('String');
	});

	it('Array', function () {
		expect(type.constructorNameOf([1, 2])).toEqual('Array');
	});

	it('RegExp', function () {
		expect(type.constructorNameOf(/^./g)).toEqual('RegExp');
	});

	it('Number', function () {
		expect(type.constructorNameOf(10000)).toEqual('Number');
	});

	it('Object', function () {
		expect(type.constructorNameOf({ name: 1 })).toEqual('Object');
	});

	it('Boolean', function () {
		expect(type.constructorNameOf(false)).toEqual('Boolean');
	});

	it('Date', function () {
		expect(type.constructorNameOf(new Date())).toEqual('Date');
	});

	if (global.Symbol) {
		it('Symbol', function () {
			expect(type.constructorNameOf(global.Symbol)).toEqual('Symbol');
		});
	}

	if (global.ArrayBuffer) {
		it('ArrayBuffer', function () {
			expect(type.constructorNameOf(global.ArrayBuffer)).toEqual('ArrayBuffer');
		});
	}

	if (global.Buffer) {
		it('Buffer', function () {
			expect(type.constructorNameOf(global.Buffer)).toEqual('Buffer');
		});

		it('String', function () {
			expect(type.constructorNameOf(global.Buffer.name)).toEqual('String');
		});

		it('Buffer', function () {
			expect(type.constructorNameOf(new global.Buffer('ab'))).toEqual('Buffer');
		});
	}

	if (global.Promise) {
		it('Promise', function () {
			expect(type.constructorNameOf(global.Promise)).toEqual('Promise');
		});

		it('Promise', function () {
			expect(type.constructorNameOf(new global.Promise((resolve) => { resolve(); }))).toEqual('Promise');
		});
	}
});
