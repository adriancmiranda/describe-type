/*
eslint-disable
no-empty-function,
no-array-constructor,
no-nested-ternary,
no-new-wrappers,
no-new-object,
no-undef
*/
import fs from 'fs';
import Stream from 'stream';
import net from 'net';
import tempy from 'tempy';
import makeArrowFn from 'make-arrow-function';
import generatorFn from 'make-generator-function';
import Custom from './datatype/types/custom';
import DataType from './datatype';

const supportES6 = new Function('try{eval(\'"use strict";class foo{}\');return true;}catch(e){return false;}');

export const streamWritable = new DataType('stream.writable');
streamWritable.add('new Stream.Writable()', new Stream.Writable());
streamWritable.add('fs.createWriteStream(tempy.file())', fs.createWriteStream(tempy.file()));

export const streamReadable = new DataType('stream.readable');
streamReadable.add('new Stream.Readable()', new Stream.Readable());
streamReadable.add(`fs.createReadStream('${__filename}')`, fs.createReadStream(`${__filename}`));

export const streamTransform = new DataType('stream.transform');
streamTransform.add('new Stream.Transform()', new Stream.Transform());

export const streamPassThrough = new DataType('stream.passthrough');
streamPassThrough.add('new Stream.PassThrough()', new Stream.PassThrough());

export const streamDuplex = new DataType('stream.duplex');
streamDuplex.add('new Stream.Duplex()', new Stream.Duplex());

export const stream = new DataType('stream');
stream.add('new Stream.Stream()', new Stream.Stream());
stream.add('new net.Socket()', new net.Socket());
stream.add(streamWritable);
stream.add(streamReadable);
stream.add(streamTransform);
stream.add(streamPassThrough);
stream.add(streamDuplex);

export const argsFilled = new DataType('args.filled');
argsFilled.add('(function args() { return arguments; }("a", "b"))', (function argsFn() { return arguments; }('a', 'b')));

export const argsEmpty = new DataType('args.empty');
argsEmpty.add('(function argsEmpty() { return arguments; }())', (function argsEmptyFn() { return arguments; }()));

export const args = new DataType('args');
args.add(argsFilled);
args.add(argsEmpty);

export const undef = new DataType('undef');
undef.add('{{source}}', undefined);

export const nil = new DataType('nil');
nil.add('{{source}}', null);

export const boolFilled = new DataType('bool.filled');
boolFilled.add('{{source}}', new Boolean(true));
boolFilled.add('Object(true)', Object(true));
boolFilled.add('{{source}}', true);

export const boolEmpty = new DataType('bool.empty');
boolEmpty.add('{{source}}', new Boolean(false));
boolEmpty.add('Object(false)', Object(false));
boolEmpty.add('{{source}}', false);

export const bool = new DataType('bool');
bool.add(boolFilled);
bool.add(boolEmpty);

export const stringFilled = new DataType('string.filled');
stringFilled.add('{{source}}', new String('foo'));
stringFilled.add('{{source}}', 'bar');

export const stringEmpty = new DataType('string.empty');
stringEmpty.add('Object("")', Object(''));
stringEmpty.add('{{source}}', '');

export const string = new DataType('string');
string.add(stringFilled);
string.add(stringEmpty);

export const objectEvil = new DataType('object.evil');
objectEvil.add('{ constructor: \'foo\' }', { constructor: 'foo', __proto__: 'foo' });
objectEvil.add('{ constructor: () => {} }', { constructor: () => {}, __proto__: 'foo' });
objectEvil.add('{ constructor: function() {} }', { constructor: function() {}, __proto__: 'foo' });
objectEvil.add('{ constructor: function evil() {} }', { constructor: function evil() {}, __proto__: 'foo' });
objectEvil.add('{ constructor: Object }', { constructor: Object, __proto__: 'foo' });
objectEvil.add('{ constructor: Number }', { constructor: Number, __proto__: 'foo' });
objectEvil.add('{ constructor: Function }', { constructor: Function, __proto__: 'foo' });
objectEvil.add('{ constructor: undefined }', { constructor: undefined, __proto__: 'foo' });
objectEvil.add('{ constructor: undefined }', { constructor: Function, __proto__: 'foo' });

export const objectFilled = new DataType('object.filled');
objectFilled.add('new Object({{source}})', new Object({ foo: 'bar' }));
objectFilled.add('{{source}}', { foo: 'bar' });
objectFilled.add('{{source}}', { a: 1 });
objectFilled.add('{{source}}', { 0: NaN, size: 0 });
objectFilled.add('{{source}}', { foo: 'bar' });
objectFilled.add('{{source}}', { length: 2 });
objectFilled.add('{{source}}', { length: -1 });
objectFilled.add('{{source}}', { length: NaN });
objectFilled.add('{{source}}', { length: 'foo' });
objectFilled.add('{{source}}', { length: '' });
objectFilled.add('{{source}}', { length: /abc/g });
objectFilled.add('{{source}}', { nodeType: 1, nodeName: 'div' });

export const objectEmpty = new DataType('object.empty');
objectEmpty.add('Object.create(null)', Object.create(null));
objectEmpty.add('new Object({})', new Object({}));
objectEmpty.add('new Object()', new Object());
objectEmpty.add('{{source}}', {});

export const object = new DataType('object');
// object.add(objectEvil);
object.add(objectFilled);
object.add(objectEmpty);

export const arrayFilled = new DataType('array.filled');
arrayFilled.add('new Array(4)', new Array(4));
arrayFilled.add('{{source}}', [undefined, undefined, undefined]);
arrayFilled.add('{{source}}', ['foo', 'bar', 'baz', 1, 2, 3]);
arrayFilled.add('{{source}}', ['foo', 'bar', ['baz', 1, 2], 3]);
arrayFilled.add('{{source}}', [0, 1, undefined]);

export const arrayEmpty = new DataType('array.empty');
arrayEmpty.add('new Array()', new Array());
arrayEmpty.add('{{source}}', []);

export const array = new DataType('array');
array.add(arrayFilled);
array.add(arrayEmpty);

export const arraylikeNative = new DataType('arraylikeNative');
arraylikeNative.add('new Int8Array(4)', global.Int8Array, 4);
arraylikeNative.add('new Uint8Array([21, 31])', global.Uint8Array, [21, 31]);
arraylikeNative.add('new Uint8Array(10)', global.Uint8Array, 10);
arraylikeNative.add('new Uint8ClampedArray(16)', global.Uint8ClampedArray, 16);
arraylikeNative.add('new Uint8ClampedArray([16, 2])', global.Uint8ClampedArray, [16, 2]);
arraylikeNative.add('new Int16Array(8)', global.Int16Array, 8);
arraylikeNative.add('new Int16Array([8, 2])', global.Int16Array, [8, 2]);
arraylikeNative.add('new Uint16Array(32)', global.Uint16Array, 32);
arraylikeNative.add('new Uint16Array([32, 1])', global.Uint16Array, [32, 1]);
arraylikeNative.add('new Int32Array(4)', global.Int32Array, 4);
arraylikeNative.add('new Int32Array([4, 4])', global.Int32Array, [4, 4]);
arraylikeNative.add('new Uint32Array(8)', global.Uint32Array, 8);
arraylikeNative.add('new Uint32Array([8, 4])', global.Uint32Array, [8, 4]);
arraylikeNative.add('new Float32Array(64)', global.Float32Array, 64);
arraylikeNative.add('new Float32Array([6, 4])', global.Float32Array, [6, 4]);
arraylikeNative.add('new Float64Array(32)', global.Float64Array, 32);
arraylikeNative.add('new Float64Array([16, 16])', global.Float64Array, [16, 16]);

export const promise = new DataType('promise');
if (global.Promise) {
	promise.add('new global.Promise((resolve) => { resolve(); }))', new global.Promise((resolve) => { resolve(); }));
	promise.add('global.Promise.resolve()', global.Promise.resolve());
}

export const arraylikeObject = new DataType('arraylikeObject');
arraylikeObject.add('{{source}}', new String('foo'));
arraylikeObject.add('{{source}}', { 0: NaN, length: 0 });
arraylikeObject.add('{{source}}', { 0: 'foo', length: 1 });
arraylikeObject.add('{{source}}', { length: 0 });
if (typeof global.document !== 'undefined') {
	arraylikeObject.add('document.body.children', global.document.body.children);
}

export const arraylike = new DataType('arraylike');
arraylike.add(arraylikeObject);
arraylike.add(arraylikeNative);
arraylike.add(args);
arraylike.add(array);

export const nativeFunction = new DataType('nativeFunction');
nativeFunction.add('Object.prototype.hasOwnProperty', Object.prototype.hasOwnProperty);
nativeFunction.add('Object.prototype.toString', Object.prototype.toString);
nativeFunction.add('Array.prototype.slice', Array.prototype.slice);

const arrowFn = makeArrowFn();
export const callable = new DataType('callable');
callable.add('{{source}}', function foo() {});
if (generatorFn) {
	callable.add('{{source}}', generatorFn);
}
if (arrowFn) {
	callable.add('{{source}}', arrowFn);
}

export const classes = new DataType('classes');
if (supportES6()) {
	classes.add('{{source}}', class Foo { constructor() {} });
}

export const zeroNegativeInteger = new DataType('zero.negativeInteger');
zeroNegativeInteger.add('-0', -0);

export const zeroPositiveInteger = new DataType('zero.positiveInteger');
zeroPositiveInteger.add('{{source}}', 0);

export const zeroNegative = new DataType('zero.negative');
zeroNegative.add(zeroNegativeInteger);
zeroNegative.add('-0.0', -0.0);

export const zeroPositive = new DataType('zero.positive');
zeroPositive.add(zeroPositiveInteger);
zeroPositive.add('0.0', 0.0);

export const zero = new DataType('zero');
zero.add(zeroNegative);
zero.add(zeroPositive);

export const uint = new DataType('uint');
uint.add('new Number(92)', new Number(92));
uint.add('0x12', 0x12);
uint.add('12e1', 12e1);
uint.add('{{source}}', 13);
uint.add('{{source}}', 10);
uint.add('{{source}}', 5);
uint.add('{{source}}', 2);
uint.add('{{source}}', 3);

export const int = new DataType('int');
int.add('{{source}}', new Number(18));
int.add('{{source}}', -11);
int.add('{{source}}', -5);
int.add('{{source}}', -2);
int.add('{{source}}', -3);

export const decimal = new DataType('decimal');
decimal.add('{{source}}', 1.141592653589793);
decimal.add('{{source}}', 1.2141592653589793);
decimal.add('{{source}}', 1.3234);
decimal.add('{{source}}', 1.35);
decimal.add('{{source}}', 1.2);
decimal.add('{{source}}', 0.1);
decimal.add('{{source}}', Math.PI);

export const nan = new DataType('nan');
nan.add('0 / 0', 0 / 0);
nan.add('parseFloat("..12")', parseFloat('..12'));
nan.add('parseFloat("FF2")', parseFloat('FF2'));
nan.add('+"foo"', +'foo');
nan.add('-{{source}}', -NaN);
nan.add('{{source}}', NaN);

export const infinity = new DataType('infinity');
infinity.add('1 / 0', 1 / 0);
infinity.add('2e308', 2e308);
infinity.add('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
infinity.add('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
infinity.add('{{source}}', -Infinity);
infinity.add('{{source}}', Infinity);

export const even = new DataType('even');
even.add('{{source}}', 2);
even.add('{{source}}', 4);
even.add('{{source}}', 6);
even.add('{{source}}', 8);
even.add('{{source}}', 10);
even.add('{{source}}', 12);
even.add('{{source}}', 14);
even.add('{{source}}', -2);
even.add('{{source}}', -4);
even.add('{{source}}', -6);
even.add('{{source}}', -8);
even.add('{{source}}', -10);
even.add('{{source}}', -12);

export const odd = new DataType('odd');
odd.add('{{source}}', 1);
odd.add('{{source}}', 3);
odd.add('{{source}}', 5);
odd.add('{{source}}', 7);
odd.add('{{source}}', 9);
odd.add('{{source}}', 11);
odd.add('{{source}}', 13);
odd.add('{{source}}', 15);
odd.add('{{source}}', -1);
odd.add('{{source}}', -3);
odd.add('{{source}}', -5);
odd.add('{{source}}', -7);
odd.add('{{source}}', -9);
odd.add('{{source}}', -11);
odd.add('{{source}}', -13);
odd.add('{{source}}', -15);

export const number = new DataType('number');
number.add(zero);
number.add(int);
number.add(uint);
number.add(even);
number.add(odd);
number.add(decimal);
number.add(nan);
number.add(infinity);

export const regexp = new DataType('regexp');
regexp.add('new RegExp("foo", "gim")', new RegExp('foo', 'gim'));
regexp.add('{{source}}', /bar/gim);

export const date = new DataType('date');
date.add('{{source}}', new Date());

export const error = new DataType('error');
error.add('new Error("foo")', new Error('foo'));
error.add('new EvalError("foo")', new EvalError('foo'));
error.add('new RangeError("foo")', new RangeError('foo'));
error.add('new ReferenceError("foo")', new ReferenceError('foo'));
error.add('new SyntaxError("foo")', new SyntaxError('foo'));
error.add('new TypeError("foo")', new TypeError('foo'));
error.add('new URIError("foo")', new URIError('foo'));

export const element = new DataType('element');
if (typeof global.document !== 'undefined') {
	element.add('document.body', global.document.body);
	[
		'abbr', 'article', 'aside', 'audio', 'bdi', 'canvas', 'data', 'datalist',
		'details', 'dialog', 'figcaption', 'figure', 'footer', 'header', 'hgroup',
		'main', 'mark', 'meter', 'nav', 'output', 'picture', 'progress', 'section',
		'summary', 'template', 'time', 'video',
	].forEach(tag => {
		element.add(`document.createElement("${tag}")`, global.document.createElement(tag));
	});
}

export const symbol = new DataType('symbol');
if (typeof global.Symbol === 'function') {
	symbol.add('{{source}}', global.Symbol('foo'));
}

export const map = new DataType('map');
map.add('new Map()', global.Map, undefined);
map.add('new WeakMap()', global.WeakMap, undefined);
map.add('new Set()', global.Set, undefined);
map.add('new WeakSet()', global.WeakSet, undefined);

export const buffer = new DataType('buffer');
buffer.add('new Buffer(4)', global.Buffer, 4);
buffer.add('new ArrayBuffer(4)', global.ArrayBuffer, 4);

export const notArraylike = new DataType('not.arraylike');
notArraylike.add(objectFilled);
notArraylike.add(element);
notArraylike.add(callable);
notArraylike.add(regexp);
notArraylike.add(symbol);
notArraylike.add(map);
notArraylike.add(error);
notArraylike.add(date);
notArraylike.add(number);
notArraylike.add(objectEmpty);
notArraylike.add(bool);
notArraylike.add(undef);
notArraylike.add(nil);

export const common = new DataType('common');
common.add(undef);
common.add(nil);
common.add(bool);
common.add(string);
common.add(object);
common.add(array);
common.add(callable);
common.add(number);
common.add(regexp);
common.add(date);
common.add(error);

export const custom = new DataType('custom');
custom.add('new Custom()', new Custom());
if (Custom.supportsCustomization) {
	custom.add('new Custom("Custom")', new Custom('Custom'));
}

export const defined = new DataType('defined');
defined.add(nil);
defined.add(objectEmpty);

export const empty = new DataType('empty');
empty.add(undef);
empty.add(nil);
empty.add(nan);
empty.add(zero);
empty.add(boolEmpty);
empty.add(stringEmpty);
empty.add(objectEmpty);
empty.add(arrayEmpty);
empty.add(argsEmpty);

export const filled = new DataType('not.empty');
filled.add(arraylikeNative);
filled.add(regexp);
filled.add(date);
filled.add(int);
filled.add(uint);
filled.add(even);
filled.add(odd);
filled.add(decimal);
filled.add(infinity);
filled.add(boolFilled);
filled.add(stringFilled);
filled.add(objectFilled);
filled.add(element.valueOf(1));
filled.add(arrayFilled);
filled.add(custom);
filled.add(error);
filled.add(argsFilled);

export const primitive = new DataType('primitive');
primitive.add(undef);
primitive.add(nil);
primitive.add(string);
primitive.add(bool);
primitive.add(number);
primitive.add(symbol);

export const numeric = new DataType('numeric');
numeric.add('{{source}}', '3.14more non-digit characters');
numeric.add('{{source}}', '0.0314E+2');
numeric.add('{{source}}', '314e-2');
numeric.add('{{source}}', '3.14');
numeric.add('{{source}}', '12..');
numeric.add('{{source}}', '.10');
numeric.add('{{source}}', '.13px');
numeric.add('{{source}}', '.11..');
numeric.add(zero);
numeric.add(int);
numeric.add(uint);
numeric.add(even);
numeric.add(odd);
numeric.add(decimal);
numeric.add(bool);

export const base64 = new DataType('base64');
base64.add('{{source}}', '');
base64.add('{{source}}: "foo"', 'Zm9v');
base64.add('{{source}}: "bar"', 'YmFy');
base64.add('{{source}}: "library"', 'bGlicmFyeQ==');
base64.add('{{source}}: "base 64"', 'YmFzZSA2NA==');
base64.add('{{source}}: "boring"', 'Ym9yaW5n');
base64.add('{{source}}: "Just a test"', 'SnVzdCBhIHRlc3Q=');

export const hexadecimal = new DataType('hexadecimal');
hexadecimal.add('{{source}}', '');
hexadecimal.add('{{source}}', '#ffffff');
hexadecimal.add('{{source}}', '#00ffcc');
hexadecimal.add('{{source}}', '#ccff00');
hexadecimal.add('{{source}}', '0xccff00');

export const hex = new DataType('');
hex.add('{{source}}', '');
hex.add('{{source}}', 'abcdABCD1234');
hex.add('{{source}}', '666F6F2C6261722C62617A');

export const jsonlike = new DataType('jsonlike');
jsonlike.add('{{source}}', '{}');
jsonlike.add('{{source}}', '[]');
jsonlike.add('{{source}}', '[{}]');
jsonlike.add('{{source}}', '{ foo: 1 }');
jsonlike.add('{{source}}', '[ foo: 2 ]');
jsonlike.add('{{source}}', '[{ foo: 3 }]');
jsonlike.add('{{source}}', JSON.stringify([1, 2, 3, 4.5, 2]));
jsonlike.add('{{source}}', JSON.stringify([0, -1, -2, -4.5, -20]));
jsonlike.add('{{source}}', JSON.stringify(['foo', 'bar', 'baz']));
jsonlike.add('{{source}}', JSON.stringify([[1, 0, 0, 0, 1], [0, 1], [0, 0]]));
jsonlike.add('{{source}}', JSON.stringify([true, false, true]));
jsonlike.add('{{source}}', JSON.stringify([/foo/, /bar/, /baz/]));

export const all = new DataType('all');
all.add(promise);
all.add(common);
all.add(element);
all.add(custom);
all.add(map);
all.add(arraylikeNative);
all.add(symbol);
all.add(buffer);
all.add(args);
all.add(stream);
