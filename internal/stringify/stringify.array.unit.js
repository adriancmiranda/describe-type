import test from 'ava';
import colors from 'colors';
import stringifyArray from './stringify.array.next';

test(`${colors.underline('stringifyArray')} exposure`, (t) => {
	t.is(toString.call(stringifyArray), '[object Function]', 'should be a function');
});

test(`${colors.underline('stringifyArray')} array`, (t) => {
	t.is(stringifyArray([1/0, 'teste', 1, 2]), '[Infinity,teste,1,2]', 'should be a list of string');
});

test(`${colors.underline('stringifyArray')} nested array`, (t) => {
	t.is(stringifyArray([1/0, ['teste', [1]], 2]), '[Infinity,[teste,[1]],2]', 'should be a list of string');
});
