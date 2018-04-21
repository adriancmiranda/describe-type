import test from 'ava';
import own from '../../../source/has/own.js';

test('own exposed', (t) => {
	t.is(toString.call(own), '[object Function]');
});
