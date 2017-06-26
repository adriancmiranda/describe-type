import test from 'ava';
import type from '../../';

test('type', (t) => {
	t.is(toString.call(type.stringify), '[object Function]');
	t.is(type.stringify(/foo/), '/foo/');
	t.is(type.stringify(function Test() {}), 'function Test() {}');
	t.is(type.stringify({}), '{}');
	t.is(type.stringify(1), '1');
});
