import test from 'ava';
import * as describeType from '../index.next';
import arrayOf from './arrayOf.next';

test('describeType.arrayOf exposure', (t) => {
	t.is(toString.call(describeType.arrayOf), '[object Function]', 'should be a function');
});

test('arrayOf exposure', (t) => {
	t.is(toString.call(arrayOf), '[object Function]', 'should be a function');
});
