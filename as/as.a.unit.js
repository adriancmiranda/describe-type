import test from 'ava';
import * as describeType from '../index.next';
import asA from './as.a.next';

const noop = () => {};
const sum = (a, b) => a + b;
const toDegrees = (angle) => angle * (180 / Math.PI);
const toRadians = (angle) => angle * (Math.PI / 180);
function normalize() {
	return (this.value - this.minimum) / (this.maximum - this.minimum);
}

test('describeType.as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('describeType.as.a method is exposed', (t) => {
	t.is(toString.call(describeType.as.a), '[object Function]', 'should be a function');
});

test('as.a method is exposed', (t) => {
	t.is(toString.call(asA), '[object Function]', 'should be a function');
});

test('as.a Function', (t) => {
	t.is(asA(Function, noop), noop, 'should be the same noop method');
	t.is(asA(Function, noop, Math.PI), noop, 'should be the same noop method again');
	t.is(asA(Function, Function.prototype), Function.prototype, 'should be Function.prototype');
	t.is(asA(Function, Function.prototype, Math.PI), Function.prototype, 'should be Function.prototype again');
});

test('as.a fallback', (t) => {
	t.is(asA(String, noop, Math.PI), Math.PI, 'should be PI');
});

test('as.a execution', (t) => {
	const ctx = { value: 10, minimum: 5, maximum: 9 };
	t.is(asA(Number, normalize, ctx), normalize.call(ctx), 'should be 1.25');
	t.is(asA(Number, sum(45, 45)), sum(45, 45), 'should be 90');
	t.is(asA(Number, sum, 45, 45), sum(45, 45), 'should be 90');
	t.is(asA(Number, toDegrees, 45), toDegrees(45), 'should be 90');
});
