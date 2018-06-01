import test from 'ava';
import * as describeType from '../index.next';
import eachProperty from './eachProperty.next';

const object = { a: 'foo', b: 'bar', c: 'baz' };
const string = 'foobar';

test('describeType.eachProperty exposure', (t) => {
	t.is(toString.call(describeType.eachProperty), '[object Function]', 'should be Function');
});

test('eachProperty exposure', (t) => {
	t.is(toString.call(eachProperty), '[object Function]', 'should be Function');
});

test('object: iterates over every item', (t) => {
	t.plan(Object.keys(object).length * 5);
	const context = 'fubar';
	eachProperty(object, function (item, key, data, index) {
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
	eachProperty(string, function (item, key, data, index) {
		t.deepEqual(this, context, 'this should be context')
		t.is(item, data[key], 'item should equal to data[key]');
		t.is(toString.call(key), '[object String]', 'key should be a String');
		t.is(toString.call(data), '[object String]', 'data should be an String');
		t.is(toString.call(index), '[object Number]', 'key should be equal to index');
	}, context);
});
