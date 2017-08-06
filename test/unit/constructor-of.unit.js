import Exotic from '../fixtures/exotic.fixture';
import type from '../../';

describe('constructorOf', function () {
	it('exposed', function () {
		expect(type.constructorOf).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.constructorOf((() => arguments)())).toEqual(Object);
	});

	it('', function () {
		expect(type.constructorOf(() => 'foo')).toEqual(Function);
	});

	it('', function () {
		expect(type.constructorOf(function () {})).toEqual(Function);
	});

	it('', function () {
		expect(type.constructorOf(global.Symbol('foo'))).toEqual(global.Symbol);
	});

	it('', function () {
		expect(type.constructorOf(new String())).toEqual(String);
	});

	it('', function () {
		expect(type.constructorOf(new RegExp('^foo'))).toEqual(RegExp);
	});

	it('', function () {
		expect(type.constructorOf(/^./g)).toEqual(RegExp);
	});

	it('', function () {
		expect(type.constructorOf(new TypeError('foo'))).toEqual(TypeError);
	});

	it('', function () {
		expect(type.constructorOf(new Error('foo'))).toEqual(Error);
	});

	it('', function () {
		expect(type.constructorOf(new Object())).toEqual(Object);
	});

	it('', function () {
		expect(type.constructorOf({ name: 1 })).toEqual(Object);
	});

	it('', function () {
		expect(type.constructorOf(new Array())).toEqual(Array);
	});

	it('', function () {
		expect(type.constructorOf([1, 2])).toEqual(Array);
	});

	it('', function () {
		expect(type.constructorOf(new Boolean())).toEqual(Boolean);
	});

	it('', function () {
		expect(type.constructorOf(new Date())).toEqual(Date);
	});

	it('', function () {
		expect(type.constructorOf(null)).toEqual(null);
	});

	it('', function () {
		expect(type.constructorOf(undefined)).toEqual(undefined);
	});

	it('', function () {
		expect(type.constructorOf(Infinity)).toEqual(Number);
	});

	it('', function () {
		expect(type.constructorOf(NaN)).toEqual(Number);
	});

	it('', function () {
		expect(type.constructorOf(10000)).toEqual(Number);
	});

	it('', function () {
		expect(type.constructorOf('ab|ba')).toEqual(String);
	});

	it('', function () {
		expect(type.constructorOf(Object.create(null))).toEqual(Object);
	});

	it('', function () {
		expect(type.constructorOf(new Exotic('FF'))).toEqual(Exotic);
	});

	it('', function () {
		expect(type.constructorOf(Exotic)).toEqual(Function);
	});

	it('', function () {
		expect(type.constructorOf(false)).toEqual(Boolean);
	});

	it('', function () {
		expect(type.constructorOf(new global.Uint8Array())).toEqual(global.Uint8Array);
	});

	it('', function () {
		expect(type.constructorOf(new global.Int32Array(new global.ArrayBuffer(8)))).toEqual(global.Int32Array);
	});

	it('', function () {
		expect(type.constructorOf(new global.ArrayBuffer(3))).toEqual(global.ArrayBuffer);
	});

	it('', function () {
		expect(type.constructorOf(global.ArrayBuffer)).toEqual(Function);
	});

	it('', function () {
		expect(type.constructorOf(Buffer)).toEqual(Function);
	});

	it('', function () {
		expect(type.constructorOf(new Buffer('1234'))).toEqual(Buffer);
	});

	it('', function () {
		expect(type.constructorOf(new global.Promise((resolve) => { resolve(); }))).toEqual(global.Promise);
	});
});
