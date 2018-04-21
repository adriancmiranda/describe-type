import test from 'ava';
import * as describeType from '../../../source';
import ownProperty from '../../../source/has/ownProperty';

test('describeType.has.ownProperty exposure', (t) => {
	t.is(toString.call(describeType.has.ownProperty), '[object Function]', 'should be a function');
});

test('ownProperty exposure', (t) => {
	t.is(toString.call(ownProperty), '[object Function]', 'should be a function');
});
