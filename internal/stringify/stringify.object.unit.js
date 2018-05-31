import test from 'ava';
import colors from 'colors';
import stringifyObject from './stringify.array.next';

test(`${colors.underline('stringifyObject')} exposure`, (t) => {
	t.is(toString.call(stringifyObject), '[object Function]', 'should be a function');
});

test(`${colors.underline('stringifyObject')}`, (t) => {
	t.pass();
});
