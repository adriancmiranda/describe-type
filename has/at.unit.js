import test from 'ava';
import * as describeType from '../index.next';
import at from './at';

test('describeType.has.at exposure', (t) => {
	t.is(toString.call(describeType.has.at), '[object Function]', 'should be a function');
});

test('at exposure', (t) => {
	t.is(toString.call(at), '[object Function]', 'should be a function');
});

test('at: native object', (t) => {
	t.true(at(window, 'window'), 'should have window at window object');
});

test('at: plain object', (t) => {
	t.true(at({ foo: 'bar' }, 'foo'), 'should have the property foo at plain object');
});
