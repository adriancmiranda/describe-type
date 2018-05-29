import test from 'ava';
import * as describeType from '../index.next';
import * as internal from './index.next';
import apply from './apply.next';

function throws(msgPrefix, ClassError, t, fn, ctx, args) {
	const err = t.throws(() => {
		apply(fn, ctx, args);
	}, ClassError);
	t.is(err.name, `${msgPrefix}Error`);
}

function throwTypeError(t, fn, ctx, args) {
	throws('Type', TypeError, t, fn, ctx, args);
}

test('describeType.apply method is exposed', (t) => {
	t.is(toString.call(describeType.apply), '[object Function]', 'should be a function');
});

test('internal.apply method is exposed', (t) => {
	t.is(toString.call(internal.apply), '[object Function]', 'should be a function');
});

test('apply method is exposed', (t) => {
	t.is(toString.call(apply), '[object Function]', 'should be a function');
});

test('apply: arguments', (t) => {
	t.is(apply((a, b) => a + b, null, [1, 2]), 3, 'should return 3');
});

test('apply: throw', (t) => {
	const err = apply((val) => val.a + val.b, null, [], true);
	t.is(err.name, 'TypeError', 'should return a TypeError');
	throwTypeError(t, (val) => val.a + val.b, null, []);
});
