import test from 'ava';
import type from '../../';

test('as', (t) => {
	const getFoo = function (a, b) { return a + b; };
	t.is(toString.call(type.as), '[object Function]');
	t.is(type.as([Number, Function], getFoo), getFoo);
	t.is(type.as('Number', getFoo, 1, 2), 3);
	t.is(type.as(String, getFoo), undefined);
	t.is(type.as(Number, () => 'foo'), undefined);
	t.is(type.as(String, () => 'foo'), 'foo');
	t.is(type.as(String, () => ''), '');
	t.is(type.as(Number, 'foo'), undefined);
	t.is(type.as(String, 'foo'), 'foo');
	t.is(type.as(undefined, undefined), undefined);
	t.is(type.as(null, null), null);
	t.is(type.as(String, undefined), undefined);
	t.is(type.as(String, ''), '');
});
