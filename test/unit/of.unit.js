import Exotic from '../fixtures/exotic.fixture';
import type from '../../';

describe('of', function () {
	it('exposed', function () {
		expect(type.of).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.of((() => arguments)())).toEqual('Arguments');
	});

	it('', function () {
		expect(type.of(arguments)).toEqual('Arguments');
	});

	it('', function () {
		expect(type.of('ab')).toEqual('String');
	});

	it('', function () {
		expect(type.of(new String('foo'))).toEqual('String');
	});

	it('', function () {
		expect(type.of(/^./g)).toEqual('RegExp');
	});

	it('', function () {
		expect(type.of(new RegExp('foo'))).toEqual('RegExp');
	});

	it('', function () {
		expect(type.of(10000)).toEqual('Number');
	});

	it('', function () {
		expect(type.of(new Number(42))).toEqual('Number');
	});

	it('', function () {
		expect(type.of({ name: 1 })).toEqual('Object');
	});

	it('', function () {
		expect(type.of({})).toEqual('Object');
	});

	it('', function () {
		expect(type.of(Object.create(null))).toEqual('Object');
	});

	it('', function () {
		expect(type.of(new Exotic())).toEqual('Exotic');
	});

	it('', function () {
		expect(type.of([])).toEqual('Array');
	});

	it('', function () {
		expect(type.of([1, 2])).toEqual('Array');
	});

	it('', function () {
		expect(type.of(new Array())).toEqual('Array');
	});

	it('', function () {
		expect(type.of(true)).toEqual('Boolean');
	});

	it('', function () {
		expect(type.of(false)).toEqual('Boolean');
	});

	it('', function () {
		expect(type.of(new Boolean(true))).toEqual('Boolean');
	});

	it('', function () {
		expect(type.of(null)).toEqual('null');
	});

	it('', function () {
		expect(type.of(undefined)).toEqual('undefined');
	});

	it('', function () {
		expect(type.of(global.Symbol)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(global.Symbol('bar'))).toEqual('Symbol');
	});

	it('', function () {
		expect(type.of(String)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Boolean)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Number)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(RegExp)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(TypeError)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Error)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Object)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Array)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Boolean)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Date)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(Exotic)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(function () {})).toEqual('Function');
	});

	it('', function () {
		expect(type.of(new Function())).toEqual('Function');
	});

	it('', function () {
		expect(type.of(new global.Map())).toEqual('Map');
	});

	it('', function () {
		expect(type.of(new global.WeakMap())).toEqual('WeakMap');
	});

	it('', function () {
		expect(type.of(new global.Set())).toEqual('Set');
	});

	it('', function () {
		expect(type.of(new global.WeakSet())).toEqual('WeakSet');
	});

	it('', function () {
		expect(type.of(new global.Int8Array())).toEqual('Int8Array');
	});

	it('', function () {
		expect(type.of(new global.Uint8Array())).toEqual('Uint8Array');
	});

	it('', function () {
		expect(type.of(new global.Uint8ClampedArray())).toEqual('Uint8ClampedArray');
	});

	it('', function () {
		expect(type.of(new global.Int16Array())).toEqual('Int16Array');
	});

	it('', function () {
		expect(type.of(new global.Uint16Array())).toEqual('Uint16Array');
	});

	it('', function () {
		expect(type.of(new global.Int32Array())).toEqual('Int32Array');
	});

	it('', function () {
		expect(type.of(new global.Uint32Array())).toEqual('Uint32Array');
	});

	it('', function () {
		expect(type.of(new global.Float32Array())).toEqual('Float32Array');
	});

	it('', function () {
		expect(type.of(new global.Float64Array())).toEqual('Float64Array');
	});

	it('', function () {
		expect(type.of(new Date())).toEqual('Date');
	});

	it('', function () {
		expect(type.of(global.ArrayBuffer)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(new global.ArrayBuffer(4))).toEqual('ArrayBuffer');
	});

	it('', function () {
		expect(type.of(Buffer)).toEqual('Function');
	});

	it('', function () {
		expect(type.of(new Buffer(3))).toEqual('Buffer');
	});

	it('', function () {
		expect(type.of(new global.Promise((resolve) => { resolve(); }))).toEqual('Promise');
	});
});

describe('of.generatorFunction', function () {
	it('', function () {
		const genFn = function* () { yield 2; return Infinity; };
		expect(type.of(genFn)).toEqual('GeneratorFunction');
	});
});
