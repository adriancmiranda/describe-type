import test from 'ava';
import * as polyfill from './index.next';
import reduce from './Array.prototype.reduce.next';

test('polyfill exposure', t => {
	t.is(toString.call(polyfill), '[object Object]', 'should be a namespace');
	t.is(toString.call(polyfill.reduce), '[object Function]', 'should be Function');
});

test('exposed', t => {
	t.is(toString.call(reduce), '[object Function]', 'should be a function');
});

test('empty list', t => {
	t.deepEqual(reduce(['a', 'e', 'i', 'o', 'u'], (acc, item, index) => {
		acc[index] = { vowel: item, index };
		return acc;
	}, []), [
		{vowel: 'a', index: 0},
		{vowel: 'e', index: 1},
		{vowel: 'i', index: 2},
		{vowel: 'o', index: 3},
		{vowel: 'u', index: 4},
	], 'should return an array with five objects');
});

test('filled list', t => {
	t.deepEqual(reduce(['a', 'e', 'i', 'o', 'u'], (acc, item, index) => {
		acc[acc.length] = { vowel: item, index };
		return acc;
	}, ['vowels']), [
		'vowels',
		{vowel: 'a', index: 0},
		{vowel: 'e', index: 1},
		{vowel: 'i', index: 2},
		{vowel: 'o', index: 3},
		{vowel: 'u', index: 4},
	], 'should return an array with one string and five objects');
});

test('string', t => {
	t.deepEqual(reduce('aeiou', (acc, item, index) => {
		acc += (item + index);
		return acc;
	}), 'ae1i2o3u4', 'should return "aeiou"');
});

test('undefined', t => {
	t.deepEqual(reduce(undefined, (acc, item, index) => {
		acc += item;
		return acc;
	}), undefined, 'should return undefined');
});

test('null', t => {
	t.deepEqual(reduce(null, (acc, item, index) => {
		acc += item;
		return acc;
	}), undefined, 'should return undefined');
});

test('unexpected value with "initialValue"', t => {
	t.deepEqual(reduce(666, (acc, item, index) => {
		acc += item;
		return acc;
	}, []), [], 'should return the initialValue');
});

test('unexpected value without "initialValue"', t => {
	t.deepEqual(reduce(666, (acc, item, index) => {
		acc += item;
		return acc;
	}), undefined, 'should returns undefined');
});
