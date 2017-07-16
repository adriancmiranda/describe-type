var expect = require('chai').expect;
var ObjectFixture = require('../fixtures/object.fixture');
var type = require('../../');

describe('constructorNameOf', function () {
	it('exposed', function () {
		expect(toString.call(type.constructorNameOf)).to.equal('[object Function]');
	});

	it('Arguments', function () {
		expect(type.constructorNameOf((() => arguments)())).to.equal('Arguments');
	});

	it('Function', function () {
		expect(type.constructorNameOf(() => 'foo')).to.equal('Function');
	});

	it('Function', function () {
		expect(type.constructorNameOf(function () { return 'foo'; })).to.equal('Function');
	});

	it('Promise', function () {
		expect(type.constructorNameOf(global.Promise)).to.equal('Promise');
	});

	it('Symbol', function () {
		expect(type.constructorNameOf(global.Symbol)).to.equal('Symbol');
	});

	it('String', function () {
		expect(type.constructorNameOf(global.Symbol.name)).to.equal('String');
	});

	it('String', function () {
		expect(type.constructorNameOf(String)).to.equal('String');
	});

	it('String', function () {
		expect(type.constructorNameOf(String.name)).to.equal('String');
	});

	it('RegExp', function () {
		expect(type.constructorNameOf(RegExp)).to.equal('RegExp');
	});

	it('String', function () {
		expect(type.constructorNameOf(RegExp.name)).to.equal('String');
	});

	it('Number', function () {
		expect(type.constructorNameOf(Number)).to.equal('Number');
	});

	it('String', function () {
		expect(type.constructorNameOf(Number.name)).to.equal('String');
	});

	it('TypeError', function () {
		expect(type.constructorNameOf(TypeError)).to.equal('TypeError');
	});

	it('String', function () {
		expect(type.constructorNameOf(TypeError.name)).to.equal('String');
	});

	it('Error', function () {
		expect(type.constructorNameOf(Error)).to.equal('Error');
	});

	it('String', function () {
		expect(type.constructorNameOf(Error.name)).to.equal('String');
	});

	it('Object', function () {
		expect(type.constructorNameOf(Object)).to.equal('Object');
	});

	it('String', function () {
		expect(type.constructorNameOf(Object.name)).to.equal('String');
	});

	it('Array', function () {
		expect(type.constructorNameOf(Array)).to.equal('Array');
	});

	it('String', function () {
		expect(type.constructorNameOf(Array.name)).to.equal('String');
	});

	it('Boolean', function () {
		expect(type.constructorNameOf(Boolean)).to.equal('Boolean');
	});

	it('String', function () {
		expect(type.constructorNameOf(Boolean.name)).to.equal('String');
	});

	it('Date', function () {
		expect(type.constructorNameOf(Date)).to.equal('Date');
	});

	it('String', function () {
		expect(type.constructorNameOf(Date.name)).to.equal('String');
	});

	it('null', function () {
		expect(type.constructorNameOf(null)).to.equal('null');
	});

	it('undefined', function () {
		expect(type.constructorNameOf(undefined)).to.equal('undefined');
	});

	it('Infinity', function () {
		expect(type.constructorNameOf(Infinity)).to.equal('Infinity');
	});

	it('NaN', function () {
		expect(type.constructorNameOf(NaN)).to.equal('NaN');
	});

	it('undefined', function () {
		expect(type.constructorNameOf(NaN.name)).to.equal('undefined');
	});

	it('String', function () {
		expect(type.constructorNameOf('ab|ba')).to.equal('String');
	});

	it('ObjectFixture', function () {
		expect(type.constructorNameOf(new ObjectFixture())).to.equal('ObjectFixture');
	});

	it('ObjectFixture', function () {
		expect(type.constructorNameOf(ObjectFixture)).to.equal('ObjectFixture');
	});

	it('String', function () {
		expect(type.constructorNameOf(ObjectFixture.name)).to.equal('String');
	});

	it('Array', function () {
		expect(type.constructorNameOf([1, 2])).to.equal('Array');
	});

	it('RegExp', function () {
		expect(type.constructorNameOf(/^./g)).to.equal('RegExp');
	});

	it('Number', function () {
		expect(type.constructorNameOf(10000)).to.equal('Number');
	});

	it('Object', function () {
		expect(type.constructorNameOf({ name: 1 })).to.equal('Object');
	});

	it('Boolean', function () {
		expect(type.constructorNameOf(false)).to.equal('Boolean');
	});

	it('Date', function () {
		expect(type.constructorNameOf(new Date())).to.equal('Date');
	});

	it('ArrayBuffer', function () {
		expect(type.constructorNameOf(global.ArrayBuffer)).to.equal('ArrayBuffer');
	});

	it('Buffer', function () {
		expect(type.constructorNameOf(Buffer)).to.equal('Buffer');
	});

	it('String', function () {
		expect(type.constructorNameOf(Buffer.name)).to.equal('String');
	});

	it('Buffer', function () {
		expect(type.constructorNameOf(new Buffer('ab'))).to.equal('Buffer');
	});

	it('Promise', function () {
		expect(type.constructorNameOf(new global.Promise((resolve) => { resolve(); }))).to.equal('Promise');
	});
});
