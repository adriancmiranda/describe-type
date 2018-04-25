import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture';
import * as internal from '../../../source/@';
import filter from '../../../source/@/filter.js';

test('internal exposure', t => {
	t.is(toString.call(internal), '[object Object]', 'should be a namespace');
	t.is(toString.call(internal.filter), '[object Function]', 'should be a Function');
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
