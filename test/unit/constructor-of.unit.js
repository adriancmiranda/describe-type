var expect = require('chai').expect;
var ObjectFixture = require('../fixtures/object.fixture');
var type = require('../../');

describe('constructorOf', function () {
	it('exposed', function () {
		expect(toString.call(type.constructorOf)).to.equal('[object Function]');
	});

	it('', function () {
		expect(type.constructorOf((() => arguments)())).to.equal(Object);
	});

	it('', function () {
		expect(type.constructorOf(() => 'foo')).to.equal(Function);
	});

	it('', function () {
		expect(type.constructorOf(function () {})).to.equal(Function);
	});

	it('', function () {
		expect(type.constructorOf(global.Symbol('foo'))).to.equal(global.Symbol);
	});

	it('', function () {
		expect(type.constructorOf(new String())).to.equal(String);
	});

	it('', function () {
		expect(type.constructorOf(new RegExp('^foo'))).to.equal(RegExp);
	});

	it('', function () {
		expect(type.constructorOf(/^./g)).to.equal(RegExp);
	});

	it('', function () {
		expect(type.constructorOf(new TypeError('foo'))).to.equal(TypeError);
	});

	it('', function () {
		expect(type.constructorOf(new Error('foo'))).to.equal(Error);
	});

	it('', function () {
		expect(type.constructorOf(new Object())).to.equal(Object);
	});

	it('', function () {
		expect(type.constructorOf({ name: 1 })).to.equal(Object);
	});

	it('', function () {
		expect(type.constructorOf(new Array())).to.equal(Array);
	});

	it('', function () {
		expect(type.constructorOf([1, 2])).to.equal(Array);
	});

	it('', function () {
		expect(type.constructorOf(new Boolean())).to.equal(Boolean);
	});

	it('', function () {
		expect(type.constructorOf(new Date())).to.equal(Date);
	});

	it('', function () {
		expect(type.constructorOf(null)).to.equal(null);
	});

	it('', function () {
		expect(type.constructorOf(undefined)).to.equal(undefined);
	});

	it('', function () {
		expect(type.constructorOf(Infinity)).to.equal(Number);
	});

	it('', function () {
		expect(type.constructorOf(NaN)).to.equal(Number);
	});

	it('', function () {
		expect(type.constructorOf(10000)).to.equal(Number);
	});

	it('', function () {
		expect(type.constructorOf('ab|ba')).to.equal(String);
	});

	it('', function () {
		expect(type.constructorOf(Object.create(null))).to.equal(Object);
	});

	it('', function () {
		expect(type.constructorOf(new ObjectFixture('FF'))).to.equal(ObjectFixture);
	});

	it('', function () {
		expect(type.constructorOf(ObjectFixture)).to.equal(Function);
	});

	it('', function () {
		expect(type.constructorOf(false)).to.equal(Boolean);
	});

	it('', function () {
		expect(type.constructorOf(new global.Uint8Array())).to.equal(global.Uint8Array);
	});

	it('', function () {
		expect(type.constructorOf(new global.Int32Array(new global.ArrayBuffer(8)))).to.equal(global.Int32Array);
	});

	it('', function () {
		expect(type.constructorOf(new global.ArrayBuffer(3))).to.equal(global.ArrayBuffer);
	});

	it('', function () {
		expect(type.constructorOf(global.ArrayBuffer)).to.equal(Function);
	});

	it('', function () {
		expect(type.constructorOf(Buffer)).to.equal(Function);
	});

	it('', function () {
		expect(type.constructorOf(new Buffer('1234'))).to.equal(Buffer);
	});

	it('', function () {
		expect(type.constructorOf(new global.Promise((resolve) => { resolve(); }))).to.equal(global.Promise);
	});
});
