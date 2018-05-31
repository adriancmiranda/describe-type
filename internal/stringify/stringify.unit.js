import test from 'ava';
import colors from 'colors';
import stringify from './stringify.next';

test(`${colors.underline('stringify')} exposure`, (t) => {
	t.is(toString.call(stringify), '[object Function]', 'should be a function');
});

test(`${colors.underline('stringify')} array`, (t) => {
	t.is(stringify([1/0, 'teste', 1, 2]), '[Infinity,teste,1,2]', 'should be a list of string');
});

test(`${colors.underline('stringify')} object`, (t) => {
	t.is(stringify({ a: 1/0, b: 'teste', c: 1 }), '{a:Infinity,b:teste,c:1}', 'should be a list of string');
});

test(`${colors.underline('stringify')} nested array`, (t) => {
	t.is(stringify([1/0, ['teste', 1], 2]), '[Infinity,[teste,1],2]', 'should be a list of string');
});

test(`${colors.underline('stringify')} nested object`, (t) => {
	t.is(stringify({
		a: 1/0,
		b: 'foo',
		c: 1,
		d: { e: 2, f: 'bar' },
		g: 'baz'
	}), '{a:Infinity,b:foo,c:1,d:{e:2,f:bar},g:baz}', 'should be a list of string');
});
