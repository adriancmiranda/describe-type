import test from 'ava';
import * as describeType from '../index.next';
import * as has from './index.next';

test('has method is exposed', (t) => {
	t.is(toString.call(describeType.has), '[object Object]', 'should be an object');
});

test('has method is an object', (t) => {
	t.is(toString.call(has), '[object Object]', 'should be an object');
});

test('has.unsafeMethod method is exposed', (t) => {
	t.is(toString.call(has.unsafeMethod), '[object Function]', 'should be a function');
});

test('has.ownProperty method is exposed', (t) => {
	t.is(toString.call(has.ownProperty), '[object Function]', 'should be a function');
});

test('has.ownValue method is exposed', (t) => {
	t.is(toString.call(has.ownValue), '[object Function]', 'should be a function');
});

test('has.own method is exposed', (t) => {
	t.is(toString.call(has.own), '[object Function]', 'should be a function');
});

test('has.at method is exposed', (t) => {
	t.is(toString.call(has.at), '[object Function]', 'should be a function');
});
