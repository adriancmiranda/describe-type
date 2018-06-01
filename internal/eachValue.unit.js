import test from 'ava';
import * as describeType from '../index.next';
import eachValue from './eachValue.next';

const array = ['foo', 'bar', 'baz'];
const arraylike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

test('describeType.eachValue exposure', (t) => {
	t.is(toString.call(describeType.eachValue), '[object Function]', 'should be Function');
});

test('eachValue exposure', (t) => {
	t.is(toString.call(eachValue), '[object Function]', 'should be Function');
});

test('array: iterates over every item', (t) => {
	t.plan(array.length * 5);
	const context = { data: 'fubar' };
	eachValue(array, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.true(Array.isArray(data), 'data should be an Array');
		t.is(index, key, 'index should be equal to key');
	}, context);
});

test('arraylike: iterates over every item', (t) => {
	t.plan(arraylike.length * 5);
	const context = ['fubar'];
	eachValue(arraylike, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.is(toString.call(data), '[object Object]', 'data should be an Object');
		t.is(toString.call(index), '[object Number]', 'key should be equal to index');
	}, context);
});

test('array: iterates over every item inversely', (t) => {
	t.plan(array.length * 6);
	const context = { data: 'fubar' };
	let i = 0;
	eachValue(array, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.true(Array.isArray(data), 'data should be an Array');
		t.is(index, key, 'index should be equal to key');
		t.is(i, data.length - key - 1, 'should be reverse');
		i += 1;
	}, context, true);
});

test('arraylike: iterates over every item inversely', (t) => {
	t.plan(arraylike.length * 6);
	const context = ['fubar'];
	let i = 0;
	eachValue(arraylike, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object Number]', 'key should be a Number');
		t.is(toString.call(data), '[object Object]', 'data should be an Object');
		t.is(toString.call(index), '[object Number]', 'key should be equal to index');
		t.is(i, data.length - key - 1, 'should be reverse');
		i += 1;
	}, context, true);
});
