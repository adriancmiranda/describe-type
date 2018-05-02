import test from 'ava';
import * as describeType from '../index.js';
import ownProperty from './ownProperty';

test('describeType.has.ownProperty exposure', (t) => {
	t.is(toString.call(describeType.has.ownProperty), '[object Function]', 'should be a function');
});

test('ownProperty exposure', (t) => {
	t.is(toString.call(ownProperty), '[object Function]', 'should be a function');
});
