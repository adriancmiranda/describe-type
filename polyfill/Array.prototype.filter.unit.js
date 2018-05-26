import test from 'ava';
import * as polyfill from './index.next';
import filter from './Array.prototype.filter.next';

test('polyfill exposure', (t) => {
	t.is(toString.call(polyfill), '[object Object]', 'should be a namespace');
	t.is(toString.call(polyfill.filter), '[object Function]', 'should be a Function');
});

test('exposed', (t) => {
	t.is(toString.call(filter), '[object Function]', 'should be a function');
});

test('filter all elements', (t) => {
	t.deepEqual(filter('aeiou'.split(''), (item, index, list) => {
	  return false;
	}), [], 'should be empty');
});

test('filter specific value', (t) => {
	t.deepEqual(filter('aeiou'.split(''), (item, index, list) => {
	  return item === 'a';
	}), ['a'], 'should be ["a"]');
});
