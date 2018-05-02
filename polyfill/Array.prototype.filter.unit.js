import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as polyfill from '../../../polyfill';
import filter from '../../../polyfill/Array.prototype.filter';

test('polyfill exposure', t => {
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
