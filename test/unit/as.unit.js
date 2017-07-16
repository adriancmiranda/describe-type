var expect = require('chai').expect;
var sumFixture = require('../fixtures/sum.fixture');
var type = require('../../');

describe('as', function () {
	it('exposed', function () {
		expect(toString.call(type.as)).to.equal('[object Function]');
	});

	it('Number|Function', function () {
		expect(type.as([Number, Function], sumFixture)).to.equal(sumFixture);
	});

	it('"Number"', function () {
		expect(type.as('Number', sumFixture, 1, 2)).to.equal(3);
	});

	it('String', function () {
		expect(type.as(String, sumFixture)).to.equal(undefined);
	});

	it('Number', function () {
		expect(type.as(Number, () => 'foo')).to.equal(undefined);
	});

	it('String', function () {
		expect(type.as(String, () => 'foo')).to.equal('foo');
	});

	it('String', function () {
		expect(type.as(String, () => '')).to.equal('');
	});

	it('"Number"', function () {
		expect(type.as(Number, 'foo')).to.equal(undefined);
	});

	it('String', function () {
		expect(type.as(String, 'foo')).to.equal('foo');
	});

	it('undefined', function () {
		expect(type.as(undefined, undefined)).to.equal(undefined);
	});

	it('null', function () {
		expect(type.as(null, null)).to.equal(null);
	});

	it('String', function () {
		expect(type.as(String, undefined)).to.equal(undefined);
	});

	it('String', function () {
		expect(type.as(String, '')).to.equal('');
	});
});
