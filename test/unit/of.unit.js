var expect = require('chai').expect;
var ObjectFixture = require('../fixtures/object.fixture');
var type = require('../../');

describe('of', function () {
	it('exposed', function () {
		expect(toString.call(type.of)).to.equal('[object Function]');
	});

	it('', function () {
		expect(type.of((() => arguments)())).to.equal('Arguments');
	});

	it('', function () {
		expect(type.of(arguments)).to.equal('Arguments');
	});

	it('', function () {
		expect(type.of('ab')).to.equal('String');
	});

	it('', function () {
		expect(type.of(new String('foo'))).to.equal('String');
	});

	it('', function () {
		expect(type.of(/^./g)).to.equal('RegExp');
	});

	it('', function () {
		expect(type.of(new RegExp('foo'))).to.equal('RegExp');
	});

	it('', function () {
		expect(type.of(10000)).to.equal('Number');
	});

	it('', function () {
		expect(type.of(new Number(42))).to.equal('Number');
	});

	it('', function () {
		expect(type.of({ name: 1 })).to.equal('Object');
	});

	it('', function () {
		expect(type.of({})).to.equal('Object');
	});

	it('', function () {
		expect(type.of(Object.create(null))).to.equal('Object');
	});

	it('', function () {
		expect(type.of(new ObjectFixture())).to.equal('ObjectFixture');
	});

	it('', function () {
		expect(type.of([])).to.equal('Array');
	});

	it('', function () {
		expect(type.of([1, 2])).to.equal('Array');
	});

	it('', function () {
		expect(type.of(new Array())).to.equal('Array');
	});

	it('', function () {
		expect(type.of(true)).to.equal('Boolean');
	});

	it('', function () {
		expect(type.of(false)).to.equal('Boolean');
	});

	it('', function () {
		expect(type.of(new Boolean(true))).to.equal('Boolean');
	});

	it('', function () {
		expect(type.of(null)).to.equal('null');
	});

	it('', function () {
		expect(type.of(undefined)).to.equal('undefined');
	});

	it('', function () {
		expect(type.of(global.Symbol)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(global.Symbol('bar'))).to.equal('Symbol');
	});

	it('', function () {
		expect(type.of(String)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(Boolean)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(Number)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(RegExp)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(TypeError)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(Error)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(Object)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(Array)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(Boolean)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(Date)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(ObjectFixture)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(function () {})).to.equal('Function');
	});

	it('', function () {
		expect(type.of(new Function())).to.equal('Function');
	});

	it('', function () {
		expect(type.of(new global.Map())).to.equal('Map');
	});

	it('', function () {
		expect(type.of(new global.WeakMap())).to.equal('WeakMap');
	});

	it('', function () {
		expect(type.of(new global.Set())).to.equal('Set');
	});

	it('', function () {
		expect(type.of(new global.WeakSet())).to.equal('WeakSet');
	});

	it('', function () {
		expect(type.of(new global.Int8Array())).to.equal('Int8Array');
	});

	it('', function () {
		expect(type.of(new global.Uint8Array())).to.equal('Uint8Array');
	});

	it('', function () {
		expect(type.of(new global.Uint8ClampedArray())).to.equal('Uint8ClampedArray');
	});

	it('', function () {
		expect(type.of(new global.Int16Array())).to.equal('Int16Array');
	});

	it('', function () {
		expect(type.of(new global.Uint16Array())).to.equal('Uint16Array');
	});

	it('', function () {
		expect(type.of(new global.Int32Array())).to.equal('Int32Array');
	});

	it('', function () {
		expect(type.of(new global.Uint32Array())).to.equal('Uint32Array');
	});

	it('', function () {
		expect(type.of(new global.Float32Array())).to.equal('Float32Array');
	});

	it('', function () {
		expect(type.of(new global.Float64Array())).to.equal('Float64Array');
	});

	it('', function () {
		expect(type.of(new Date())).to.equal('Date');
	});

	it('', function () {
		expect(type.of(global.ArrayBuffer)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(new global.ArrayBuffer(4))).to.equal('ArrayBuffer');
	});

	it('', function () {
		expect(type.of(Buffer)).to.equal('Function');
	});

	it('', function () {
		expect(type.of(new Buffer(3))).to.equal('Buffer');
	});

	it('', function () {
		expect(type.of(new global.Promise((resolve) => { resolve(); }))).to.equal('Promise');
	});
});

describe('of.generatorFunction', function () {
	it('', function () {
		const genFn = function* () { yield 2; return Infinity; };
		expect(type.of(genFn)).to.equal('GeneratorFunction');
	});
});
