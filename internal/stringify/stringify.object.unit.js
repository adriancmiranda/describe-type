import test from 'ava';
import colors from 'colors';
import stringifyObject from './stringify.array.next';

test(`${colors.underline('stringifyObject')} exposure`, (t) => {
	t.is(toString.call(stringifyObject), '[object Function]', 'should be a function');
});

test(`${colors.underline('stringifyObject')} object`, (t) => {
	t.is(stringify({ a: 1/0, b: 'teste', c: 1 }), '{a:Infinity,b:teste,c:1}', 'should be a list of string');
});

test(`${colors.underline('stringifyObject')} nested object`, (t) => {
	t.is(stringify({
		a: 1/0,
		b: 'foo',
		c: 1,
		d: { e: 2, f: 'bar' },
		g: 'baz'
	}), '{a:Infinity,b:foo,c:1,d:{e:2,f:bar},g:baz}', 'should be a list of string');
});
