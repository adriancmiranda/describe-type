import test from 'ava';
import * as describeType from '../index.next';
import asInstanceOf from './as.instanceOf.next';

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.instanceOf method is exposed', (t) => {
	t.is(toString.call(describeType.as.instanceOf), '[object Function]', 'should be a function');
});

test('as.asInstanceOf method is exposed', (t) => {
	t.is(toString.call(asInstanceOf), '[object Function]', 'should be a function');
});

test('as.instanceOf: multiple types', (t) => {
	function qux() {}
	t.is(asInstanceOf([Number, Function], qux), qux, 'should be "qux" function');
});

test('as.instanceOf: execution', (t) => {
	t.is(asInstanceOf(Number, function bar(a, b) { return a + b; }, 1, 2), 3, 'should be three');
});

test('as.instanceOf: invalid number', (t) => {
	t.is(asInstanceOf(Number, () => new String('fubar')), undefined, 'should be undefined');
	t.is(asInstanceOf(Number, new String('baz')), undefined, 'should be undefined');
});

test('as.instanceOf: single type', (t) => {
	t.deepEqual(asInstanceOf(String, () => new String('foo')), new String('foo'), 'should be "foo"');
	t.deepEqual(asInstanceOf(String, () => new String('')), new String(''), 'should return ""');
	t.deepEqual(asInstanceOf(String, new String('bar')), new String('bar'), 'should be "bar"');
	t.deepEqual(asInstanceOf(String, new String('')), new String(''), 'should be ""');
	t.is(asInstanceOf(String, function baz() {}), undefined, 'should be undefined');
	t.is(asInstanceOf(String, undefined), undefined, 'should return undefined');
});

test('as.instanceOf: undefined', (t) => {
	t.is(asInstanceOf(undefined, undefined), undefined);
});

test('as.instanceOf: null', (t) => {
	t.is(asInstanceOf(null, null), null);
});
