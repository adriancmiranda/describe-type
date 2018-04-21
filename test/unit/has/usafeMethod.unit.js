import test from 'ava';
import unsafeMethod from '../../../source/has/unsafeMethod.js';

test('unsafeMethod exposed', (t) => {
	t.is(toString.call(unsafeMethod), '[object Function]');
});
