import test from 'ava';
import * as describeType from '../index.next';
import asType from './as.type.next';

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

test('describeType.as.type method is exposed', (t) => {
	t.is(toString.call(describeType.as.type), '[object Function]', 'should be a function');
});

test('as.type method is exposed', (t) => {
	t.is(toString.call(asType), '[object Function]', 'should be a function');
});

test('as.type Function', (t) => {
	t.is(asType(Function, noop), noop, 'should be the same noop method');
	t.is(asType(Function, noop, Math.PI), noop, 'should be the same noop method again');
	t.is(asType(Function, Function.prototype), Function.prototype, 'should be Function.prototype');
	t.is(asType(Function, Function.prototype, Math.PI), Function.prototype, 'should be Function.prototype again');
});

test('as.type fallback', (t) => {
	t.is(asType(String, noop, Math.PI), Math.PI, 'should be PI');
});

test('as.type execution', (t) => {
	const ctx = { value: 10, minimum: 5, maximum: 9 };
	t.is(asType(Number, normalize, ctx), normalize.call(ctx), 'should be 1.25');
	t.is(asType(Number, sum(45, 45)), sum(45, 45), 'should be 90');
	t.is(asType(Number, sum, 45, 45), sum(45, 45), 'should be 90');
	t.is(asType(Number, toDegrees, 45), toDegrees(45), 'should be 90');
});
