var expect = require('chai').expect;
var ObjectFixture = require('../fixtures/object.fixture');
var type = require('../../');

describe('name', function () {
	it('exposed', function () {
		expect(toString.call(type.name)).to.equal('[object Function]');
	});

	it('', function () {
		expect(type.name((() => arguments)())).to.equal('Arguments');
	});

	it('', function () {
		expect(type.name(global.Promise)).to.equal('Promise');
	});

	it('', function () {
		expect(type.name(global.Symbol)).to.equal('Symbol');
	});

	it('', function () {
		expect(type.name(String)).to.equal('String');
	});

	it('', function () {
		expect(type.name(RegExp)).to.equal('RegExp');
	});

	it('', function () {
		expect(type.name(Number)).to.equal('Number');
	});

	it('', function () {
		expect(type.name(TypeError)).to.equal('TypeError');
	});

	it('', function () {
		expect(type.name(Error)).to.equal('Error');
	});

	it('', function () {
		expect(type.name(Object)).to.equal('Object');
	});

	it('', function () {
		expect(type.name(Array)).to.equal('Array');
	});

	it('', function () {
		expect(type.name(Boolean)).to.equal('Boolean');
	});

	it('', function () {
		expect(type.name(Date)).to.equal('Date');
	});

	it('', function () {
		expect(type.name(null)).to.equal('null');
	});

	it('', function () {
		expect(type.name(undefined)).to.equal('undefined');
	});

	it('', function () {
		expect(type.name(NaN)).to.equal('NaN');
	});

	it('', function () {
		expect(type.name('|a-b|b>a|', true)).to.equal('_a_b|b_a_');
	});

	it('', function () {
		expect(type.name('ab|ba', true)).to.equal('ab|ba');
	});

	it('', function () {
		expect(type.name('ab|ba')).to.equal('String');
	});

	it('', function () {
		expect(type.name(new ObjectFixture('FixtureTest'))).to.equal('FixtureTest');
	});

	it('', function () {
		expect(type.name(ObjectFixture)).to.equal('FixtureTest');
	});

	it('', function () {
		expect(type.name([1, 2])).to.equal('Array');
	});

	it('', function () {
		expect(type.name(/^./g)).to.equal('RegExp');
	});

	it('', function () {
		expect(type.name(10000)).to.equal('Number');
	});

	it('', function () {
		expect(type.name({ name: 1 })).to.equal('Object');
	});

	it('', function () {
		expect(type.name(false)).to.equal('Boolean');
	});

	it('', function () {
		expect(type.name(new Date())).to.equal('Date');
	});

	it('', function () {
		expect(type.name(global.ArrayBuffer)).to.equal('ArrayBuffer');
	});

	it('', function () {
		expect(type.name(new global.ArrayBuffer(4))).to.equal('ArrayBuffer');
	});

	it('', function () {
		expect(type.name(new global.Int32Array(new global.ArrayBuffer(8)))).to.equal('Int32Array');
	});

	it('', function () {
		expect(type.name(Buffer)).to.equal('Buffer');
	});

	it('', function () {
		expect(type.name(new Buffer('ab'))).to.equal('Buffer');
	});
});
