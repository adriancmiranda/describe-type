import test from 'ava';
import * as describeType from '../index.next';
import each from './each.next';

const array = ['foo', 'bar', 'baz'];
const arraylike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
const object = { a: 'foo', b: 'bar', c: 'baz' };
const string = 'foobar';

test('describeType.each exposure', (t) => {
	t.is(toString.call(describeType.each), '[object Function]', 'should be Function');
});

test('each exposure', (t) => {
	t.is(toString.call(each), '[object Function]', 'should be Function');
});

test('array: iterates over every item', (t) => {
	t.plan(array.length * 5);
	const context = { data: 'fubar' };
	each(array, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.true(Array.isArray(data), 'data should be an Array');
		t.is(index, key, 'index should be equal to key');
	}, context);
});

test('array: iterates over every item inversely', (t) => {
	t.plan(array.length * 6);
	const context = { data: 'fubar' };
	let i = 0;
	each(array, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.true(Array.isArray(data), 'data should be an Array');
		t.is(index, key, 'index should be equal to key');
		t.is(i, data.length - key - 1, 'should be reverse');
		i += 1;
	}, context, true);
});

test('arraylike: iterates over every item', (t) => {
	t.plan(arraylike.length * 5);
	const context = ['fubar'];
	each(arraylike, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.is(toString.call(data), '[object Object]', 'data should be an Object');
		t.is(toString.call(index), '[object Number]', 'key should be equal to index');
	}, context);
});

test('arraylike: iterates over every item inversely', (t) => {
	t.plan(arraylike.length * 6);
	const context = ['fubar'];
	let i = 0;
	each(arraylike, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.is(toString.call(data), '[object Object]', 'data should be an Object');
		t.is(toString.call(index), '[object Number]', 'key should be equal to index');
		t.is(i, data.length - key - 1, 'should be reverse');
		i += 1;
	}, context, true);
});

test('object: iterates over every item', (t) => {
	t.plan(Object.keys(object).length * 5);
	const context = 'fubar';
	each(object, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object String]', 'key should be a String');
		t.is(toString.call(data), '[object Object]', 'data should be an Object');
		t.is(toString.call(index), '[object Number]', 'key should be equal to index');
	}, context);
});

test('string: iterates over every item', (t) => {
	t.plan(string.length * 5);
	const context = 'fubar';
	each(string, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.is(toString.call(data), '[object String]', 'data should be an String');
		t.is(toString.call(index), '[object Number]', 'key should be equal to index');
	}, context);
});
