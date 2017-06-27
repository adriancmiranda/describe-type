import test from 'ava';
import ObjectFixture from '../fixtures/object.fixture';
import type from '../../';

test('is.buffer', (t) => {
	t.is(toString.call(type.is.buffer), '[object Function]');
	t.is(type.is.a.buffer, type.is.buffer, 'alias works');
	t.is(type.is.an.buffer, type.is.buffer, 'alias works');
	t.is(type.is.buffer(new Uint8Array(1)), false);
	t.is(type.is.buffer(new Buffer(1)), true);
	t.is(type.is.buffer(undefined), false);
	t.is(type.is.buffer(new (function Buffer(){})()), false);
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
	t.is(type.is.not.buffer(new (function Buffer(){})()), true);
	t.is(type.is.not.buffer(new Uint8Array(1)), true);
	t.is(type.is.not.buffer(new Buffer(1)), false);
});

test('test Buffer on browser', (t) => {
	const buffer = Buffer;
	delete global.Buffer;
	t.is(type.is.buffer(1), false);
	global.Buffer = buffer;
});

test('is', (t) => {
	t.is(toString.call(type.is), '[object Function]');
	t.is(type.is.a, type.is, 'alias works');
	t.is(type.is.an, type.is, 'alias works');
	t.is(type.is('Arguments', (() => arguments)()), true);
	t.is(type.is('Function|Array|Number', Infinity), true);
	t.is(type.is('Function|Array|Infinity', String), true);
	t.is(type.is('Function|Array', String), true);
	t.is(type.is('Function|Array', []), true);
	t.is(type.is('Function|Array', () => []), true);
	t.is(type.is('String|Function', 'pirate'), true);
	t.is(type.is([String, Function, Object, Infinity], Infinity), true);
	t.is(type.is([String, Function, Object, Infinity], Number), true);
	t.is(type.is([String, Function, Object, Infinity], 0), true);
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
	t.is(type.is('Undefined', undefined), true);
	t.is(type.is(null, null), true);
	t.is(type.is('null', null, true), true);
	t.is(type.is('Null', null), true);
	t.is(type.is(NaN, NaN), true);
	t.is(type.is(Number, NaN), true);
	t.is(type.is(Number.name, NaN), true);
	t.is(type.is('Number', NaN), true);
	t.is(type.is(Buffer, new Uint8Array(1)), false);
});

test('is.not', (t) => {
	t.is(toString.call(type.is.not), '[object Function]');
	t.is(type.is.not.a, type.is.not, 'alias works');
	t.is(type.is.not.an, type.is.not, 'alias works');
	t.is(type.is.not('Arguments', (() => arguments)()), false);
	t.is(type.is.not('Function|Array|Number', String), false);
	t.is(type.is.not('Function|Array|Number', Infinity), false);
	t.is(type.is.not('Function|Array', String), false);
	t.is(type.is.not('Function|Array', []), false);
	t.is(type.is.not('Function|Array', () => []), false);
	t.is(type.is.not('String|Function', 'pirate'), false);
	t.is(type.is.not([String, Function, Object, Boolean], 'pirate'), false);
	t.is(type.is.not([String, Function, Object, Infinity], Infinity), false);
	t.is(type.is.not([String, Function, Object, Infinity], Number), false);
	t.is(type.is.not([String, Function, Object, Infinity], 0), false);
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
	t.is(type.is.not('Undefined', undefined), false);
	t.is(type.is.not(null, null), false);
	t.is(type.is.not('null', null, true), false);
	t.is(type.is.not('Null', null), false);
	t.is(type.is.not(Infinity, Infinity), false);
	t.is(type.is.not(Infinity, Number), true);
	t.is(type.is.not(Number, Infinity), false);
	t.is(type.is.not(NaN, NaN), false);
	t.is(type.is.not(Number, NaN), false);
	t.is(type.is.not(Number.name, NaN), false);
	t.is(type.is.not('Number', NaN), false);
	t.is(type.is.not(Uint8Array, new Buffer(0)), true);
});
