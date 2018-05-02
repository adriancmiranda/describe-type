import test from 'ava';
import * as describeType from '..';
import booleanOf from '../../../internal/booleanOf';

test('describeType.booleanOf exposure', (t) => {
	t.is(toString.call(describeType.booleanOf), '[object Function]', 'should be a function');
});

test('booleanOf exposure', (t) => {
	t.is(toString.call(booleanOf), '[object Function]', 'should be a function');
});

test('0 should be false', (t) => {
	t.is(booleanOf(0), false);
});

test('1 should be true', (t) => {
	t.is(booleanOf(1), true);
});

test('"true" should be true', (t) => {
	t.is(booleanOf('true'), true);
});

test('"false" should be false', (t) => {
	t.is(booleanOf('false'), false);
});

test('NaN should be false', (t) => {
	t.is(booleanOf(NaN), false);
});

test('Infinity should be true', (t) => {
	t.is(booleanOf(Infinity), true);
});

test('"0" should be false', (t) => {
	t.is(booleanOf('0'), false);
});

test('"1" should be true', (t) => {
	t.is(booleanOf('1'), true);
});
