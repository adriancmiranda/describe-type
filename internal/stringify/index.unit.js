import test from 'ava';
import colors from 'colors';
import * as describeType from '../../index.next';
import stringify from './index.next';
import stringifyArray from './stringify.array.next.js';
import stringifyObject from './stringify.object.next.js';

test(`${colors.underline('describeType.stringify')} exposure`, (t) => {
	t.is(toString.call(describeType.stringify), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.stringify.array), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.stringify.object), '[object Function]', 'should be a function');
	t.deepEqual(describeType.stringify.array, stringifyArray, 'should be the same');
	t.deepEqual(describeType.stringify.object, stringifyObject, 'should be the same');
});

test(`${colors.underline('stringify')} exposure`, (t) => {
	t.is(toString.call(stringify), '[object Function]', 'should be a function');
	t.is(toString.call(stringify.array), '[object Function]', 'should be a function');
	t.is(toString.call(stringify.object), '[object Function]', 'should be a function');
	t.deepEqual(stringify.array, stringifyArray, 'should be the same');
	t.deepEqual(stringify.object, stringifyObject, 'should be the same');
});
