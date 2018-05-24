import test from 'ava';
import slice from './Array.prototype.slice.next';

test('exposed', t => {
	t.is(toString.call(slice), '[object Function]', 'should be a function');
});

test('string', t => {
	t.is(slice('Test with string value', 10), 'string value');
});

test('string range', t => {
	t.is(slice('Test with string value', 10, 16), 'string');
});

test('array', t => {
	t.deepEqual(slice('Test with array value'.split(''), 10), 'array value'.split(''));
});

test('array range', t => {
	t.deepEqual(slice('Test with array value'.split(''), 10, 15), 'array'.split(''));
});

test('arguments value', t => {
	t.deepEqual((function() {
		return slice(arguments, 10);
	}).apply(this, 'Test with arguments value'.split('')), 'arguments value'.split(''));
});

test('no arguments', t => {
	t.deepEqual((function() {
		return slice(arguments);
	}).apply(this, []), []);
});

test('no extra arguments', t => {
	t.deepEqual((function(a, b) {
		return slice(arguments, 2);
	}).apply(this, ['a', 'b']), []);
});

test('arguments range', t => {
	t.deepEqual((function() {
		return slice(arguments, 10, 19);
	}).apply(this, 'Test with arguments value'.split('')), 'arguments'.split(''));
});
