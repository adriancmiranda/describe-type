import Exotic from 'fixtures/exotic.fixture';
import * as type from '~';

describe('#typeOf', function () {
	it('exposed', function () {
		expect(type.typeOf).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.typeOf((() => arguments)())).toEqual('Arguments');
	});

	it('', function () {
		expect(type.typeOf(arguments)).toEqual('Arguments');
	});

	it('', function () {
		expect(type.typeOf('ab')).toEqual('String');
	});

	it('', function () {
		expect(type.typeOf(new String('foo'))).toEqual('String');
	});

	it('', function () {
		expect(type.typeOf(/^./g)).toEqual('RegExp');
	});

	it('', function () {
		expect(type.typeOf(new RegExp('foo'))).toEqual('RegExp');
	});

	it('', function () {
		expect(type.typeOf(10000)).toEqual('Number');
	});

	it('', function () {
		expect(type.typeOf(new Number(42))).toEqual('Number');
	});

	it('', function () {
		expect(type.typeOf({ name: 1 })).toEqual('Object');
	});

	it('', function () {
		expect(type.typeOf({})).toEqual('Object');
	});

	it('', function () {
		expect(type.typeOf(Object.create(null))).toEqual('Object');
	});

	it('', function () {
		expect(type.typeOf(new Exotic())).toEqual('Exotic');
	});

	it('', function () {
		expect(type.typeOf([])).toEqual('Array');
	});

	it('', function () {
		expect(type.typeOf([1, 2])).toEqual('Array');
	});

	it('', function () {
		expect(type.typeOf(new Array())).toEqual('Array');
	});

	it('', function () {
		expect(type.typeOf(true)).toEqual('Boolean');
	});

	it('', function () {
		expect(type.typeOf(false)).toEqual('Boolean');
	});

	it('', function () {
		expect(type.typeOf(new Boolean(true))).toEqual('Boolean');
	});

	it('', function () {
		expect(type.typeOf(null)).toEqual('null');
	});

	it('', function () {
		expect(type.typeOf(undefined)).toEqual('undefined');
	});

	it('', function () {
		expect(type.typeOf(String)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Boolean)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Number)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(RegExp)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(TypeError)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Error)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Object)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Array)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Boolean)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Date)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(Exotic)).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(function () {})).toEqual('Function');
	});

	it('', function () {
		expect(type.typeOf(new Function())).toEqual('Function');
	});

	if (global.Symbol) {
		it('', function () {
			expect(type.typeOf(global.Symbol('bar'))).toEqual('Symbol');
		});

		it('', function () {
			expect(type.typeOf(global.Symbol)).toEqual('Function');
		});
	}

	if (global.Map) {
		it('', function () {
			expect(type.typeOf(new global.Map())).toEqual('Map');
		});
	}

	if (global.WeakMap) {
		it('', function () {
			expect(type.typeOf(new global.WeakMap())).toEqual('WeakMap');
		});
	}

	if (global.Set) {
		it('', function () {
			expect(type.typeOf(new global.Set())).toEqual('Set');
		});
	}

	if (global.WeakSet) {
		it('', function () {
			expect(type.typeOf(new global.WeakSet())).toEqual('WeakSet');
		});
	}

	if (global.Int8Array) {
		it('', function () {
			expect(type.typeOf(new global.Int8Array())).toEqual('Int8Array');
		});
	}

	if (global.Uint8Array) {
		it('', function () {
			expect(type.typeOf(new global.Uint8Array())).toEqual('Uint8Array');
		});
	}

	if (global.Uint8ClampedArray) {
		it('', function () {
			expect(type.typeOf(new global.Uint8ClampedArray())).toEqual('Uint8ClampedArray');
		});
	}

	if (global.Int16Array) {
		it('', function () {
			expect(type.typeOf(new global.Int16Array())).toEqual('Int16Array');
		});
	}

	if (global.Uint16Array) {
		it('', function () {
			expect(type.typeOf(new global.Uint16Array())).toEqual('Uint16Array');
		});
	}

	if (global.Int32Array) {
		it('', function () {
			expect(type.typeOf(new global.Int32Array())).toEqual('Int32Array');
		});
	}

	if (global.Uint32Array) {
		it('', function () {
			expect(type.typeOf(new global.Uint32Array())).toEqual('Uint32Array');
		});
	}

	if (global.Float32Array) {
		it('', function () {
			expect(type.typeOf(new global.Float32Array())).toEqual('Float32Array');
		});
	}

	if (global.Float64Array) {
		it('', function () {
			expect(type.typeOf(new global.Float64Array())).toEqual('Float64Array');
		});
	}

	it('', function () {
		expect(type.typeOf(new Date())).toEqual('Date');
	});

	if (global.ArrayBuffer) {
		it('', function () {
			expect(type.typeOf(global.ArrayBuffer)).toEqual('Function');
		});
	}

	if (global.ArrayBuffer) {
		it('', function () {
			expect(type.typeOf(new global.ArrayBuffer(4))).toEqual('ArrayBuffer');
		});
	}

	if (global.Buffer) {
		it('', function () {
			expect(type.typeOf(global.Buffer)).toEqual('Function');
		});

		it('Buffer', function () {
			expect(type.typeOf(new Buffer(3))).toEqual('Buffer');
		});
	}

	if (global.Promise) {
		it('Promise', function () {
			expect(type.typeOf(new global.Promise((resolve) => { resolve(); }))).toEqual('Promise');
		});
	}
});

describe('typeOf.generatorFunction', function () {
	it('', function () {
		// const genFn = function* () { yield 2; return Infinity; };
		// expect(type.typeOf(genFn)).toEqual('GeneratorFunction');
	});
});
