import test from 'ava';
import ownValue from '../../../source/has/ownValue.js';

test('ownValue exposed', (t) => {
	t.is(toString.call(ownValue), '[object Function]');
});
