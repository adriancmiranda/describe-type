import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture';
import * as internal from '../../../source/internal';
import reduce from '../../../source/@/reduce.js';

test('internal exposure', t => {
	t.is(toString.call(internal), '[object Object]', 'should be a namespace');
});

test('exposed', (t) => {
	t.is(toString.call(reduce), '[object Function]', 'should be a function');
});

test('string', (t) => {
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
	]);
});
