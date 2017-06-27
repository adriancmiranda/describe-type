import test from 'ava';
import ObjectFixture from '../fixtures/object.fixture';
import type from '../../';

test('of', (t) => {
	t.is(toString.call(type.of), '[object Function]');
	t.is(type.of((() => arguments)()), 'Arguments');
	t.is(type.of(arguments), 'Arguments');
	t.is(type.of('ab'), 'String');
	t.is(type.of(new String('foo')), 'String');
	t.is(type.of(/^./g), 'RegExp');
	t.is(type.of(new RegExp('foo')), 'RegExp');
	t.is(type.of(10000), 'Number');
	t.is(type.of(new Number(42)), 'Number');
	t.is(type.of({ name: 1 }), 'Object');
	t.is(type.of({}), 'Object');
	t.is(type.of(Object.create(null)), 'Object');
	t.is(type.of(new ObjectFixture()), 'ObjectFixture');
	t.is(type.of([]), 'Array');
	t.is(type.of([1, 2]), 'Array');
	t.is(type.of(new Array()), 'Array');
	t.is(type.of(true), 'Boolean');
	t.is(type.of(false), 'Boolean');
	t.is(type.of(new Boolean(true)), 'Boolean');
	t.is(type.of(null), 'Null');
	t.is(type.of(undefined), 'Undefined');
	t.is(type.of(Symbol), 'Function');
	t.is(type.of(Symbol('bar')), 'Symbol');
	t.is(type.of(String), 'Function');
	t.is(type.of(Boolean), 'Function');
	t.is(type.of(Number), 'Function');
	t.is(type.of(RegExp), 'Function');
	t.is(type.of(TypeError), 'Function');
	t.is(type.of(Error), 'Function');
	t.is(type.of(Object), 'Function');
	t.is(type.of(Array), 'Function');
	t.is(type.of(Boolean), 'Function');
	t.is(type.of(Date), 'Function');
	t.is(type.of(ObjectFixture), 'Function');
	t.is(type.of(function () {}), 'Function');
	t.is(type.of(new Function()), 'Function');
	t.is(type.of(new Map()), 'Map');
	t.is(type.of(new WeakMap()), 'WeakMap');
	t.is(type.of(new Set()), 'Set');
	t.is(type.of(new WeakSet()), 'WeakSet');
	t.is(type.of(new Int8Array()), 'Int8Array');
	t.is(type.of(new Uint8Array()), 'Uint8Array');
	t.is(type.of(new Uint8ClampedArray()), 'Uint8ClampedArray');
	t.is(type.of(new Int16Array()), 'Int16Array');
	t.is(type.of(new Uint16Array()), 'Uint16Array');
	t.is(type.of(new Int32Array()), 'Int32Array');
	t.is(type.of(new Uint32Array()), 'Uint32Array');
	t.is(type.of(new Float32Array()), 'Float32Array');
	t.is(type.of(new Float64Array()), 'Float64Array');
	t.is(type.of(new Date()), 'Date');
	t.is(type.of(ArrayBuffer), 'Function');
	t.is(type.of(new ArrayBuffer(4)), 'ArrayBuffer');
	t.is(type.of(Buffer), 'Function');
	t.is(type.of(new Buffer(3)), 'Buffer');
	t.is(type.of(new Promise((resolve) => { resolve(); })), 'Promise');
});

test.todo('Need more consistency at NodeJS <= 5');
test.skip('of.generatorFunction', (t) => {
	const genFn = function* () { yield 2; return Infinity; };
	if (type.of(genFn) !== 'GeneratorFunction') {
		t.fail('This environment does not support ES6 generator functions.');
	} else {
		t.is(type.of(genFn), 'GeneratorFunction');
	}
});
