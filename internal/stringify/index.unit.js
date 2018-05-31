import test from 'ava';
import colors from 'colors';
import * as describeType from '../../index.next';
import stringify from './stringify.next';

test(`${colors.underline('describeType.stringify')} exposure`, (t) => {
	t.is(toString.call(describeType.stringify), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.stringify.array), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.stringify.object), '[object Function]', 'should be a function');
});

test(`${colors.underline('stringify')} exposure`, (t) => {
	t.is(toString.call(stringify), '[object Function]', 'should be a function');
	t.is(toString.call(stringify.array), '[object Function]', 'should be a function');
	t.is(toString.call(stringify.object), '[object Function]', 'should be a function');
});
