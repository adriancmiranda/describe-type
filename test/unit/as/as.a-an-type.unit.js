import test from 'ava';
import * as describeType from '../../../source';
import as from '../../../source/as/index';

test('as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('as.a method is exposed', (t) => {
	t.is(toString.call(as.a), '[object Function]', 'should be a function');
});

test('as.an method is exposed', (t) => {
	t.is(toString.call(as.an), '[object Function]', 'should be a function');
});

test('as.type method is exposed', (t) => {
	t.is(toString.call(as.type), '[object Function]', 'should be a function');
});
