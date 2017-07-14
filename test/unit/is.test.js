import test from 'ava';
import ObjectFixture from '../fixtures/object.fixture';
import type from '../../';

test('is.buffer', (t) => {
	t.is(toString.call(type.is.buffer), '[object Function]');
	t.is(type.is.a.buffer, type.is.buffer, 'alias works');
	t.is(type.is.an.buffer, type.is.buffer, 'alias works');
	t.is(type.is.buffer(new global.Uint8Array(1)), false);
	t.is(type.is.buffer(new Buffer(1)), true);
	t.is(type.is.buffer(undefined), false);
	t.is(type.is.buffer(new (function Buffer() {})()), false);
	t.is(type.is.buffer(null), false);
	t.is(type.is.buffer(false), false);
	t.is(type.is.buffer(true), false);
	t.is(type.is.buffer(() => 'foo'), false);
	t.is(type.is.buffer('foo'), false);
	t.is(type.is.buffer({}), false);
	t.is(type.is.buffer(''), false);
	t.is(type.is.buffer(0), false);
	t.is(type.is.buffer(1), false);
});

test('is.not.buffer', (t) => {
	t.is(toString.call(type.is.not.buffer), '[object Function]');
	t.is(type.is.not.a.buffer, type.is.not.buffer, 'alias works');
	t.is(type.is.not.an.buffer, type.is.not.buffer, 'alias works');
	t.is(type.is.not.buffer(new (function Buffer() {})()), true);
	t.is(type.is.not.buffer(new global.Uint8Array(1)), true);
	t.is(type.is.not.buffer(new Buffer(1)), false);
});

test('is.arraylike', (t) => {
	t.is(toString.call(type.is.arraylike), '[object Function]');
	t.is(type.is.arraylike((() => arguments)()), true);
	t.is(type.is.arraylike(new global.Uint8Array(10)), true);
	t.is(type.is.arraylike(new String('foo')), true);
	t.is(type.is.arraylike(document.body.children), true);
	t.is(type.is.arraylike({ 0: NaN, length: 0 }), true);
	t.is(type.is.arraylike({ 0: 'foo', length: 1 }), true);
	t.is(type.is.arraylike([undefined, undefined, undefined]), true);
	t.is(type.is.arraylike([0, 1, undefined]), true);
	t.is(type.is.arraylike(new Array(2)), true);
	t.is(type.is.arraylike([]), true);
	t.is(type.is.arraylike({ length: 0 }), true);
});

test('is.not.arraylike', (t) => {
	t.is(toString.call(type.is.not.arraylike), '[object Function]');
	t.is(type.is.not.arraylike({ length: 2 }), true);
	t.is(type.is.not.arraylike(Object.create(null)), true);
	t.is(type.is.not.arraylike({}), true);
	t.is(type.is.not.arraylike(null), true);
	t.is(type.is.not.arraylike(false), true);
	t.is(type.is.not.arraylike(), true);
	t.is(type.is.not.arraylike({ length: -1 }), true);
	t.is(type.is.not.arraylike({ length: NaN }), true);
	t.is(type.is.not.arraylike({ length: 'foo' }), true);
	t.is(type.is.not.arraylike({ length: '' }), true);
});

test('test Buffer on browser', (t) => {
	const buffer = Buffer;
	delete global.Buffer;
	t.is(type.is.buffer(1), false);
	global.Buffer = buffer;
});

test('is.numeric', (t) => {
	t.is(toString.call(type.is.numeric), '[object Function]');
	t.is(type.is.numeric('0'), true);
	t.is(type.is.numeric('1'), true);
	t.is(type.is.numeric('1.2'), true);
	t.is(type.is.numeric(1), true);
});

test('is.not.numeric', (t) => {
	t.is(toString.call(type.is.not.numeric), '[object Function]');
	t.is(type.is.not.numeric('1.2a'), true);
	t.is(type.is.not.numeric('a1.2'), true);
});

test('is.int', (t) => {
	t.is(toString.call(type.is.int), '[object Function]');
	t.is(type.is.int(-1), true);
	t.is(type.is.int(12), true);
	// t.is(type.is.int('12'), false);
});

test('is.not.int', (t) => {
	t.is(toString.call(type.is.not.int), '[object Function]');
	// t.is(type.is.not.int('12'), true);
	t.is(type.is.not.int('1.2a'), true);
	t.is(type.is.not.int('1.2'), true);
	t.is(type.is.not.int(1.2), true);
	t.is(type.is.not.int(-1.2), true);
});

test('is.uint', (t) => {
	t.is(toString.call(type.is.uint), '[object Function]');
	t.is(type.is.uint(0), true);
	t.is(type.is.uint(1), true);
});

test('is.not.uint', (t) => {
	t.is(toString.call(type.is.not.uint), '[object Function]');
	t.is(type.is.not.uint(1.2), true);
	t.is(type.is.not.uint(-1.2), true);
});

test('is.primitive', (t) => {
	t.is(toString.call(type.is.primitive), '[object Function]');
	t.is(type.is.primitive(), true);
	t.is(type.is.primitive(null), true);
	t.is(type.is.primitive(true), true);
	t.is(type.is.primitive(false), true);
	t.is(type.is.primitive(NaN), true);
	t.is(type.is.primitive(Object), true);
	t.is(type.is.primitive(function foo() {}), true);
	t.is(type.is.primitive(1), true);
	t.is(type.is.primitive('foo'), true);
	t.is(type.is.primitive(global.Symbol('foo')), true);
});

test('is.not.primitive', (t) => {
	t.is(toString.call(type.is.not.primitive), '[object Function]');
	t.is(type.is.not.primitive({}), true);
	t.is(type.is.not.primitive([]), true);
	t.is(type.is.not.primitive(Object.create(null)), true);
});

test('is.json', (t) => {
	t.is(toString.call(type.is.json), '[object Function]');
});

test('is.not.json', (t) => {
	t.is(toString.call(type.is.not.json), '[object Function]');
});

test('is', (t) => {
	t.is(toString.call(type.is), '[object Function]');
	t.is(type.is.a, type.is, 'alias works');
	t.is(type.is.an, type.is, 'alias works');
	t.is(type.is('Arguments', (() => arguments)()), true);
	t.is(type.is('Function|Array|Number', Infinity), false);
	t.is(type.is('Function|Array|Infinity', String), true);
	t.is(type.is('Function|Array', String), true);
	t.is(type.is('Function|Array', []), true);
	t.is(type.is('Function|Array', () => []), true);
	t.is(type.is('String|Function', 'pirate'), true);
	t.is(type.is([String, Function, Object, Infinity], Infinity), true);
	t.is(type.is([String, Function, Object, Infinity], Number), true);
	t.is(type.is([String, Function, Object, Infinity], 0), false);
	t.is(type.is([String, Function, Object, Boolean], 'pirate'), true);
	t.is(type.is([String.name, Function.name], 'pirate'), true);
	t.is(type.is('String|Function', () => 'pirate'), true);
	t.is(type.is([String, Function], () => 'pirate'), true);
	t.is(type.is([String.name, Function.name], () => 'pirate'), true);
	t.is(type.is('Function', () => 'pirate'), true);
	t.is(type.is(Function, () => 'pirate'), true);
	t.is(type.is(Function.name, () => 'pirate'), true);
	t.is(type.is('String', () => 'pirate'), false);
	t.is(type.is(String, () => 'pirate'), false);
	t.is(type.is(String.name, () => 'pirate'), false);
	t.is(type.is(ObjectFixture, new ObjectFixture('pirate')), true);
	t.is(type.is(ObjectFixture.name, new ObjectFixture('pirate')), true);
	t.is(type.is('Pirate', new ObjectFixture('Pirate')), true);
	t.is(type.is(undefined, undefined), true);
	t.is(type.is('undefined', undefined, true), true);
	t.is(type.is(null, null), true);
	t.is(type.is('null', null, true), true);
	t.is(type.is(Number, Infinity), false);
	t.is(type.is(Infinity, Infinity), true);
	t.is(type.is(NaN, NaN), true);
	t.is(type.is(Number, NaN), false);
	t.is(type.is(Number.name, NaN), false);
	t.is(type.is('Number', NaN), false);
	t.is(type.is(Buffer, new global.Uint8Array(1)), false);
	t.is(type.is(window.HTMLDivElement, document.createElement('div')), true);
});

test('is.not', (t) => {
	t.is(toString.call(type.is.not), '[object Function]');
	t.is(type.is.not.a, type.is.not, 'alias works');
	t.is(type.is.not.an, type.is.not, 'alias works');
	t.is(type.is.not('Arguments', (() => arguments)()), false);
	t.is(type.is.not('Function|Array|Number', String), false);
	t.is(type.is.not('Function|Array|Number', Infinity), true);
	t.is(type.is.not('Function|Array', String), false);
	t.is(type.is.not('Function|Array', []), false);
	t.is(type.is.not('Function|Array', () => []), false);
	t.is(type.is.not('String|Function', 'pirate'), false);
	t.is(type.is.not([String, Function, Object, Boolean], 'pirate'), false);
	t.is(type.is.not([String, Function, Object, Infinity], Infinity), false);
	t.is(type.is.not([String, Function, Object, Infinity], Number), false);
	t.is(type.is.not([String, Function, Object, Infinity], 0), true);
	t.is(type.is.not([String.name, Function.name], 'pirate'), false);
	t.is(type.is.not('String|Function', () => 'pirate'), false);
	t.is(type.is.not([String, Function], () => 'pirate'), false);
	t.is(type.is.not([String.name, Function.name], () => 'pirate'), false);
	t.is(type.is.not('Function', () => 'pirate'), false);
	t.is(type.is.not(Function, () => 'pirate'), false);
	t.is(type.is.not(Function.name, () => 'pirate'), false);
	t.is(type.is.not('String', () => 'pirate'), true);
	t.is(type.is.not(String, () => 'pirate'), true);
	t.is(type.is.not(String.name, () => 'pirate'), true);
	t.is(type.is.not(ObjectFixture, new ObjectFixture('pirate')), false);
	t.is(type.is.not(ObjectFixture.name, new ObjectFixture('pirate')), false);
	t.is(type.is.not('ObjectFixture', new ObjectFixture()), false);
	t.is(type.is.not(undefined, undefined), false);
	t.is(type.is.not('undefined', undefined, true), false);
	t.is(type.is.not(null, null), false);
	t.is(type.is.not('null', null, true), false);
	t.is(type.is.not(Infinity, Infinity), false);
	t.is(type.is.not(Infinity, Number), true);
	t.is(type.is.not(Number, Infinity), true);
	t.is(type.is.not(NaN, NaN), false);
	t.is(type.is.not(Number, NaN), true);
	t.is(type.is.not(Number.name, NaN), true);
	t.is(type.is.not('Number', NaN), true);
	t.is(type.is.not(global.Uint8Array, new Buffer(0)), true);
});
