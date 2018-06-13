import test from 'ava';
import * as describeType from '../index.next';
import as from './index.next';

test('as method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('as.a method is exposed', (t) => {
	t.is(toString.call(as.a), '[object Function]', 'should be a function');
});

test('as.an method is exposed', (t) => {
	t.is(toString.call(as.an), '[object Function]', 'should be a function');
});

test('as.any method is exposed', (t) => {
	t.is(toString.call(as.any), '[object Function]', 'should be a function');
});

test('as.instanceOf method is exposed', (t) => {
	t.is(toString.call(as.instanceOf), '[object Function]', 'should be a function');
});

test('as.type method is exposed', (t) => {
	t.is(toString.call(as.type), '[object Function]', 'should be a function');
});

test('as.arrayOf method is exposed', (t) => {
	t.is(toString.call(as.arrayOf), '[object Function]', 'should be a function');
});
