var expect = require('chai').expect;
var type = require('../../');

describe('toString', function () {
	it('', function () {
		expect(toString.call(type.toString)).to.equal('[object Function]');
	});

	it('', function () {
		expect(type.toString(/foo/)).to.equal('RegExp');
	});

	it('', function () {
		expect(type.toString(function () {})).to.equal('Function');
	});

	it('', function () {
		expect(type.toString(function () {}, true)).to.equal('Function');
	});

	it('', function () {
		expect(type.toString(function Test() {})).to.equal('Function');
	});

	it('', function () {
		expect(type.toString(function Test() {}, true)).to.equal('Function');
	});

	it('', function () {
		expect(type.toString(new (function Test() {}), true)).to.equal('Test');
	});

	it('', function () {
		expect(type.toString(Object.create(null), true)).to.equal('Object');
	});

	it('', function () {
		expect(type.toString(Object.create(null))).to.equal('Object');
	});

	it('', function () {
		expect(type.toString({})).to.equal('Object');
	});

	it('', function () {
		expect(type.toString(1)).to.equal('Number');
	});
});

