import test from 'ava';
import ObjectFixture from '../fixtures/object.fixture';
import type from '../..';

test('constructorOf', (t) => {
	t.is(toString.call(type.constructorOf), '[object Function]');
	t.is(type.constructorOf((() => arguments)()), Object);
	t.is(type.constructorOf(() => 'foo'), Function);
	t.is(type.constructorOf(function () {}), Function);
	t.is(type.constructorOf(Symbol('foo')), Symbol);
	t.is(type.constructorOf(new String()), String);
	t.is(type.constructorOf(new RegExp('^foo')), RegExp);
	t.is(type.constructorOf(/^./g), RegExp);
	t.is(type.constructorOf(new TypeError('foo')), TypeError);
	t.is(type.constructorOf(new Error('foo')), Error);
	t.is(type.constructorOf(new Object()), Object);
	t.is(type.constructorOf({ name: 1 }), Object);
	t.is(type.constructorOf(new Array()), Array);
	t.is(type.constructorOf([1, 2]), Array);
	t.is(type.constructorOf(new Boolean()), Boolean);
	t.is(type.constructorOf(new Date()), Date);
	t.is(type.constructorOf(null), null);
	t.is(type.constructorOf(undefined), undefined);
	t.is(type.constructorOf(Infinity), Number);
	t.is(type.constructorOf(NaN), Number);
	t.is(type.constructorOf(10000), Number);
	t.is(type.constructorOf('ab|ba'), String);
	t.is(type.constructorOf(Object.create(null)), Object);
	t.is(type.constructorOf(new ObjectFixture('FF')), ObjectFixture);
	t.is(type.constructorOf(ObjectFixture), Function);
	t.is(type.constructorOf(false), Boolean);
	t.is(type.constructorOf(new Uint8Array()), Uint8Array);
	t.is(type.constructorOf(new Int32Array(new ArrayBuffer(8))), Int32Array);
	t.is(type.constructorOf(new ArrayBuffer(3)), ArrayBuffer);
	t.is(type.constructorOf(ArrayBuffer), Function);
	t.is(type.constructorOf(Buffer), Function);
	t.is(type.constructorOf(new Buffer('1234')), Buffer);
	t.is(type.constructorOf(new Promise((resolve) => { resolve(); })), Promise);
});