import test from 'ava';
import uintOf from '../../../source/built-in/uintOf';

test('uintOf exposed', (t) => {
	t.is(toString.call(uintOf), '[object Function]', 'should be a function');;
});

test('', (t) => {
	t.is(uintOf(-1.2), 0);
});

test('', (t) => {
	t.is(uintOf(1.2), 1);
});

test('', (t) => {
	t.is(uintOf(1), 1);
});
