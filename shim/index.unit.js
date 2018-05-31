import test from 'ava';
import colors from 'colors';
import getPrototypeOf from './Object.getPrototypeOf.next.js';

test(`${colors.underline('getPrototypeOf')} exposure`, (t) => {
	t.is(toString.call(getPrototypeOf), '[object Function]', '"getPrototypeOf" should be an function');
});
