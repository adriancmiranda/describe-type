import test from 'ava';
import * as describeType from '../index.next';
import ownProperty from './ownProperty';

test('describeType.has.ownProperty exposure', (t) => {
	t.is(toString.call(describeType.has.ownProperty), '[object Function]', 'should be a function');
});

test('ownProperty exposure', (t) => {
	t.is(toString.call(ownProperty), '[object Function]', 'should be a function');
});

test('ownProperty: at plain object', (t) => {
	t.true(ownProperty({ a:'foobar', b:'fubar', c:['foo', 'bar'] }, 'b'), 'should have "b" at object');
});
