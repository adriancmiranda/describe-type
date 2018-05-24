import test from 'ava';
import * as describeType from '../index.next.js';
import mod from './mod.next.js';

function range(t, a, b) {
	for (let i = a; i <= b; i += 1) {
		t.is(mod(i, a, b), i, `index:${i}, divident:${a}, divisor:${b} should be ${i}`);
	}
}

test('describeType.internal.mod exposure', t => {
	t.is(toString.call(describeType), '[object Object]', 'should be an object as a namespace');
	t.is(toString.call(describeType.internal.mod), '[object Function]', 'should be a function');
});

test('mod', t => {
	t.is(toString.call(mod), '[object Function]', 'should be a function');
});

test('negative range', t => {
	t.is(mod(-10, -9, 0), 0);
});

test('negative start and negative end', t => {
	t.is(mod(-4, -3, -1), -1);
});

test('negative start and positive end', t => {
	range(t, -12, 12);
	t.is(mod(-13, -12, 12), 12);
	t.is(mod(-14, -12, 12), 11);
	t.is(mod(-15, -12, 12), 10);
});

test('positive range (9, 0, 9) -> 9', t => {
	t.is(mod(9, 0, 9), 9);
});

test('positive range (-1, 0, 9) -> 9', t => {
	t.is(mod(-1, 0, 9), 9);
});

test('positive range (5, 0, 9) -> 9', t => {
	t.is(mod(5, 0, 9), 5);
});

test('positive range (10, 0, 9) -> 0', t => {
	t.is(mod(10, 0, 9), 0);
});

test('no sense range (1, 0, 0) -> 0', t => {
	t.is(mod(1, 0, 0), 0);
});

test('no sense range (2, 0, 0) -> 0', t => {
	t.is(mod(2, 0, 0), 0);
});

test('no sense range (3, 0, 0) -> 0', t => {
	t.is(mod(3, 0, 0), 0);
});

test('empty range', t => {
	t.is(mod(), 0);
});
